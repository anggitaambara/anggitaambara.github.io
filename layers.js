var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriTopoWorld_1 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ProduksiPaditon_2 = new ol.format.GeoJSON();
var features_ProduksiPaditon_2 = format_ProduksiPaditon_2.readFeatures(json_ProduksiPaditon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduksiPaditon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduksiPaditon_2.addFeatures(features_ProduksiPaditon_2);
var lyr_ProduksiPaditon_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProduksiPaditon_2, 
                style: style_ProduksiPaditon_2,
                interactive: true,
    title: 'Produksi Padi (ton)<br />\
    <img src="styles/legend/ProduksiPaditon_2_0.png" /> 14774 - 22242 <br />\
    <img src="styles/legend/ProduksiPaditon_2_1.png" /> 22243 - 28687 <br />\
    <img src="styles/legend/ProduksiPaditon_2_2.png" /> 28688 - 48418 <br />\
    <img src="styles/legend/ProduksiPaditon_2_3.png" /> 48419 - 59718 <br />\
    <img src="styles/legend/ProduksiPaditon_2_4.png" /> 59719 - 72628 <br />'
        });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_BatasKabupatenBrebes_4 = new ol.format.GeoJSON();
var features_BatasKabupatenBrebes_4 = format_BatasKabupatenBrebes_4.readFeatures(json_BatasKabupatenBrebes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupatenBrebes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupatenBrebes_4.addFeatures(features_BatasKabupatenBrebes_4);
var lyr_BatasKabupatenBrebes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKabupatenBrebes_4, 
                style: style_BatasKabupatenBrebes_4,
                interactive: false,
                title: '<img src="styles/legend/BatasKabupatenBrebes_4.png" /> Batas Kabupaten Brebes'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_EsriTopoWorld_1.setVisible(true);lyr_ProduksiPaditon_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKabupatenBrebes_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EsriTopoWorld_1,lyr_ProduksiPaditon_2,lyr_BatasKecamatan_3,lyr_BatasKabupatenBrebes_4];
lyr_ProduksiPaditon_2.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Luas_ha': 'Luas_ha', 'Prod_Padi': 'Prod_Padi', });
lyr_BatasKecamatan_3.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'Luas_ha': 'Luas_ha', 'Prod_Padi': 'Prod_Padi', });
lyr_BatasKabupatenBrebes_4.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'kode': 'kode', 'Ibukota': 'Ibukota', 'Dsr_Hukum': 'Dsr_Hukum', 'Provinsi': 'Provinsi', 'Bupati_Wal': 'Bupati_Wal', 'Wakil': 'Wakil', 'Batas_Utar': 'Batas_Utar', 'Batas_Sela': 'Batas_Sela', 'Batas_Bara': 'Batas_Bara', 'Batas_Timu': 'Batas_Timu', 'Lmb_Geo': 'Lmb_Geo', });
lyr_ProduksiPaditon_2.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Luas_ha': 'TextEdit', 'Prod_Padi': 'Range', });
lyr_BatasKecamatan_3.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'Luas_ha': 'TextEdit', 'Prod_Padi': 'Range', });
lyr_BatasKabupatenBrebes_4.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'kode': 'TextEdit', 'Ibukota': 'TextEdit', 'Dsr_Hukum': 'TextEdit', 'Provinsi': 'TextEdit', 'Bupati_Wal': 'TextEdit', 'Wakil': 'TextEdit', 'Batas_Utar': 'TextEdit', 'Batas_Sela': 'TextEdit', 'Batas_Bara': 'TextEdit', 'Batas_Timu': 'TextEdit', 'Lmb_Geo': 'TextEdit', });
lyr_ProduksiPaditon_2.set('fieldLabels', {'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Luas_ha': 'inline label', 'Prod_Padi': 'inline label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'ID': 'no label', 'ID_Kec': 'no label', 'Kecamatan': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'kode_prop': 'no label', 'kode_kab': 'no label', 'Luas_ha': 'no label', 'Prod_Padi': 'no label', });
lyr_BatasKabupatenBrebes_4.set('fieldLabels', {'ID': 'no label', 'Kabupaten_': 'no label', 'kode': 'no label', 'Ibukota': 'no label', 'Dsr_Hukum': 'no label', 'Provinsi': 'no label', 'Bupati_Wal': 'no label', 'Wakil': 'no label', 'Batas_Utar': 'no label', 'Batas_Sela': 'no label', 'Batas_Bara': 'no label', 'Batas_Timu': 'no label', 'Lmb_Geo': 'no label', });
lyr_BatasKabupatenBrebes_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});