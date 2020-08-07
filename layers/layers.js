var wms_layers = [];

var format_po_distritos_UTM_v20_0 = new ol.format.GeoJSON();
var features_po_distritos_UTM_v20_0 = format_po_distritos_UTM_v20_0.readFeatures(json_po_distritos_UTM_v20_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_po_distritos_UTM_v20_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_po_distritos_UTM_v20_0.addFeatures(features_po_distritos_UTM_v20_0);
var lyr_po_distritos_UTM_v20_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_po_distritos_UTM_v20_0, 
                style: style_po_distritos_UTM_v20_0,
                interactive: true,
    title: 'po_distritos_UTM_v20<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_0.png" /> Cajabamba<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_1.png" /> Cajamarca<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_2.png" /> Celendín<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_3.png" /> Chota<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_4.png" /> Contumazá<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_5.png" /> Cutervo<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_7.png" /> Jaén<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_8.png" /> San Ignacio<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_9.png" /> San Marcos<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_10.png" /> San Miguel<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_11.png" /> San Pablo<br />\
    <img src="styles/legend/po_distritos_UTM_v20_0_12.png" /> Santa Cruz<br />'
        });

lyr_po_distritos_UTM_v20_0.setVisible(true);
var layersList = [lyr_po_distritos_UTM_v20_0];
lyr_po_distritos_UTM_v20_0.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_po_distritos_UTM_v20_0.set('fieldImages', {'IDDPTO': '', 'DEPART': '', 'PROV_ID': '', 'PROVINCIA': '', 'DIST_ID': '', 'DISTRITO': '', 'AREA_Km2': '', 'AREA_Ha': '', });
lyr_po_distritos_UTM_v20_0.set('fieldLabels', {'IDDPTO': 'no label', 'DEPART': 'no label', 'PROV_ID': 'no label', 'PROVINCIA': 'no label', 'DIST_ID': 'no label', 'DISTRITO': 'no label', 'AREA_Km2': 'no label', 'AREA_Ha': 'no label', });
lyr_po_distritos_UTM_v20_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});