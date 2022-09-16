mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2RvcmEiLCJhIjoiY2t0OTVrOXllMThvYzJ1cWx0cjNrajh6ciJ9.VtVXGZ5lB83a-70qOnBk_g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [12, 50],
        zoom: 1.6
    });

    // Data: UN Human Development Index 2017 Europe extract
    // Source: https://ourworldindata.org/human-development-index
    const data = [
        { 'code': 'SWE', 'hdi': 0.933 },
        { 'code': 'CHE', 'hdi': 0.944 },
        { 'code': 'HRV', 'hdi': 0.831 },
        // { 'code': 'DEU', 'hdi': 0.936 },
        { 'code': 'DE-HE', 'hdi': 0.936 },

       
    ];

    map.on('load', () => {
        // Add source for country polygons using the Mapbox Countries tileset
        // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data
        // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
        map.addSource('countries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1'
        });

        // Build a GL match expression that defines the color for every vector tile feature
        // Use the ISO 3166-1 alpha 3 code as the lookup key for the country shape
        const matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];

        // Calculate color values for each country based on 'hdi' value
        for (const row of data) {
            // Convert the range of data values to a suitable color
            const green = row['hdi'] * 255;
            const color = `rgb(0, ${green}, 0)`;

            matchExpression.push(row['code'], color);
        }

        // Last value is the default, used where there is no data
        matchExpression.push('rgba(0, 0, 0, 0)');

        // Add layer from the vector tile source to create the choropleth
        // Insert it below the 'admin-1-boundary-bg' layer in the style
        map.addLayer(
            {
                'id': 'countries-join',
                'type': 'fill',
                'source': 'countries',
                'source-layer': 'country_boundaries',
                'paint': {
                    'fill-color': matchExpression
                }
            },
            'admin-1-boundary-bg'
        );
    });