var wms_layers = [];

        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_Public_Safety_Facilities_1 = new ol.format.GeoJSON();
var features_Public_Safety_Facilities_1 = format_Public_Safety_Facilities_1.readFeatures(json_Public_Safety_Facilities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Safety_Facilities_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Public_Safety_Facilities_1.addFeatures(features_Public_Safety_Facilities_1);var lyr_Public_Safety_Facilities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Safety_Facilities_1, 
                style: style_Public_Safety_Facilities_1,
                title: '<img src="styles/legend/Public_Safety_Facilities_1.png" /> Public_Safety_Facilities'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Public_Safety_Facilities_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Public_Safety_Facilities_1];
lyr_Public_Safety_Facilities_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'LAT': 'LAT', 'LON': 'LON', 'AgencyID': 'AgencyID', 'AgencyType': 'AgencyType', 'FacilityTy': 'FacilityTy', });
lyr_Public_Safety_Facilities_1.set('fieldImages', {'OBJECTID': '', 'ID': '', 'Name': '', 'Address': '', 'City': '', 'State': '', 'Zip': '', 'LAT': '', 'LON': '', 'AgencyID': '', 'AgencyType': '', 'FacilityTy': '', });
lyr_Public_Safety_Facilities_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Name': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'LAT': 'no label', 'LON': 'no label', 'AgencyID': 'no label', 'AgencyType': 'no label', 'FacilityTy': 'no label', });
lyr_Public_Safety_Facilities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});