export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { specialty, city, state, zip, limit = 20 } = req.query;

  try {
    // Build NPPES API query
    const params = new URLSearchParams({
      version: "2.1",
      limit: Math.min(limit, 200),
      enumeration_type: "NPI-1", // Individual providers only
    });

    if (specialty) params.append("taxonomy_description", specialty);
    if (city) params.append("city", city);
    if (state) params.append("state", state);
    if (zip) params.append("postal_code", zip);

    const response = await fetch(
      `https://npiregistry.cms.hhs.gov/api/?${params.toString()}`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "NPPES API error" });
    }

    const data = await response.json();

    // Transform NPPES data into MediGuide doctor format
    const doctors = (data.results || [])
      .filter(d => d.addresses && d.addresses.length > 0)
      .map((d, index) => {
        const basic = d.basic || {};
        const address = d.addresses?.find(a => a.address_purpose === "LOCATION") || d.addresses?.[0] || {};
        const taxonomy = d.taxonomies?.find(t => t.primary) || d.taxonomies?.[0] || {};

        const firstName = basic.first_name || "";
        const lastName = basic.last_name || "";
        const credential = basic.credential || "";

        return {
          id: index + 1,
          npi: d.number,
          name: `${firstName} ${lastName}${credential ? ", " + credential : ""}`.trim(),
          specialty: taxonomy.desc || "General Practice",
          hospital: address.organization_name || address.address_1 || "Private Practice",
          address: `${address.address_1 || ""}, ${address.city || ""}, ${address.state || ""} ${address.postal_code || ""}`.trim(),
          city: address.city || "",
          state: address.state || "",
          zip: address.postal_code || "",
          phone: address.telephone_number || "",
          gender: basic.gender === "F" ? "Female" : basic.gender === "M" ? "Male" : "Unknown",
          languages: ["English"], // NPPES doesn't provide language data
          available: Math.random() > 0.3, // Will be replaced with real availability
          acceptsNoInsurance: Math.random() > 0.5, // Will be replaced with real data
          distance: Math.round(Math.random() * 15 * 10) / 10, // Will be replaced with real distance
          rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
          reviews: Math.floor(10 + Math.random() * 200),
          color: ["#4A90D9", "#7B5EA7", "#3AAD8E", "#E05C5C", "#F5A623"][index % 5],
          keywords: [taxonomy.desc?.toLowerCase() || "general"],
        };
      });

    return res.status(200).json({
      doctors,
      total: data.result_count || 0,
      source: "NPPES National Provider Registry"
    });

  } catch (error) {
    return res.status(500).json({ error: "Doctor search error: " + error.message });
  }
}