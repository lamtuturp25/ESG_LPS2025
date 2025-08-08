var wms_layers = [];

var format_Pacitan_0 = new ol.format.GeoJSON();
var features_Pacitan_0 = format_Pacitan_0.readFeatures(json_Pacitan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pacitan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pacitan_0.addFeatures(features_Pacitan_0);
var lyr_Pacitan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pacitan_0, 
                style: style_Pacitan_0,
                popuplayertitle: 'Pacitan',
                interactive: true,
    title: 'Pacitan<br />\
    <img src="styles/legend/Pacitan_0_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pacitan_0_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pacitan_0_2.png" /> Klaster 3<br />' });
var format_Ponorogo_1 = new ol.format.GeoJSON();
var features_Ponorogo_1 = format_Ponorogo_1.readFeatures(json_Ponorogo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponorogo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponorogo_1.addFeatures(features_Ponorogo_1);
var lyr_Ponorogo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponorogo_1, 
                style: style_Ponorogo_1,
                popuplayertitle: 'Ponorogo',
                interactive: true,
    title: 'Ponorogo<br />\
    <img src="styles/legend/Ponorogo_1_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ponorogo_1_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ponorogo_1_2.png" /> Klaster 3<br />' });
var format_Trenggalek_2 = new ol.format.GeoJSON();
var features_Trenggalek_2 = format_Trenggalek_2.readFeatures(json_Trenggalek_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trenggalek_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trenggalek_2.addFeatures(features_Trenggalek_2);
var lyr_Trenggalek_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trenggalek_2, 
                style: style_Trenggalek_2,
                popuplayertitle: 'Trenggalek',
                interactive: true,
    title: 'Trenggalek<br />\
    <img src="styles/legend/Trenggalek_2_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Trenggalek_2_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Trenggalek_2_2.png" /> Klaster 3<br />' });
var format_Tulungagung_3 = new ol.format.GeoJSON();
var features_Tulungagung_3 = format_Tulungagung_3.readFeatures(json_Tulungagung_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tulungagung_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tulungagung_3.addFeatures(features_Tulungagung_3);
var lyr_Tulungagung_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tulungagung_3, 
                style: style_Tulungagung_3,
                popuplayertitle: 'Tulungagung',
                interactive: true,
    title: 'Tulungagung<br />\
    <img src="styles/legend/Tulungagung_3_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Tulungagung_3_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Tulungagung_3_2.png" /> Klaster 3<br />' });
var format_Blitar_4 = new ol.format.GeoJSON();
var features_Blitar_4 = format_Blitar_4.readFeatures(json_Blitar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blitar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blitar_4.addFeatures(features_Blitar_4);
var lyr_Blitar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blitar_4, 
                style: style_Blitar_4,
                popuplayertitle: 'Blitar',
                interactive: true,
    title: 'Blitar<br />\
    <img src="styles/legend/Blitar_4_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Blitar_4_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Blitar_4_2.png" /> Klaster 3<br />' });
var format_KotaBlitar_5 = new ol.format.GeoJSON();
var features_KotaBlitar_5 = format_KotaBlitar_5.readFeatures(json_KotaBlitar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBlitar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBlitar_5.addFeatures(features_KotaBlitar_5);
var lyr_KotaBlitar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBlitar_5, 
                style: style_KotaBlitar_5,
                popuplayertitle: 'Kota Blitar',
                interactive: true,
    title: 'Kota Blitar<br />\
    <img src="styles/legend/KotaBlitar_5_0.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaBlitar_5_1.png" /> Klaster 3<br />' });
var format_Kediri_6 = new ol.format.GeoJSON();
var features_Kediri_6 = format_Kediri_6.readFeatures(json_Kediri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kediri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kediri_6.addFeatures(features_Kediri_6);
var lyr_Kediri_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kediri_6, 
                style: style_Kediri_6,
                popuplayertitle: 'Kediri',
                interactive: true,
    title: 'Kediri<br />\
    <img src="styles/legend/Kediri_6_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Kediri_6_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Kediri_6_2.png" /> Klaster 3<br />' });
var format_KotaKediri_7 = new ol.format.GeoJSON();
var features_KotaKediri_7 = format_KotaKediri_7.readFeatures(json_KotaKediri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaKediri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaKediri_7.addFeatures(features_KotaKediri_7);
var lyr_KotaKediri_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaKediri_7, 
                style: style_KotaKediri_7,
                popuplayertitle: 'Kota Kediri',
                interactive: true,
    title: 'Kota Kediri<br />\
    <img src="styles/legend/KotaKediri_7_0.png" /> Klaster 1<br />\
    <img src="styles/legend/KotaKediri_7_1.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaKediri_7_2.png" /> Klaster 3<br />' });
var format_Malang_8 = new ol.format.GeoJSON();
var features_Malang_8 = format_Malang_8.readFeatures(json_Malang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malang_8.addFeatures(features_Malang_8);
var lyr_Malang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malang_8, 
                style: style_Malang_8,
                popuplayertitle: 'Malang',
                interactive: true,
    title: 'Malang<br />\
    <img src="styles/legend/Malang_8_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Malang_8_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Malang_8_2.png" /> Klaster 3<br />' });
var format_KotaMalang_9 = new ol.format.GeoJSON();
var features_KotaMalang_9 = format_KotaMalang_9.readFeatures(json_KotaMalang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMalang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_9.addFeatures(features_KotaMalang_9);
var lyr_KotaMalang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMalang_9, 
                style: style_KotaMalang_9,
                popuplayertitle: 'Kota Malang',
                interactive: true,
    title: 'Kota Malang<br />\
    <img src="styles/legend/KotaMalang_9_0.png" /> Klaster 3<br />' });
var format_Lumajang_10 = new ol.format.GeoJSON();
var features_Lumajang_10 = format_Lumajang_10.readFeatures(json_Lumajang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumajang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumajang_10.addFeatures(features_Lumajang_10);
var lyr_Lumajang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumajang_10, 
                style: style_Lumajang_10,
                popuplayertitle: 'Lumajang',
                interactive: true,
    title: 'Lumajang<br />\
    <img src="styles/legend/Lumajang_10_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Lumajang_10_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Lumajang_10_2.png" /> Klaster 3<br />' });
var format_Jember_11 = new ol.format.GeoJSON();
var features_Jember_11 = format_Jember_11.readFeatures(json_Jember_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jember_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jember_11.addFeatures(features_Jember_11);
var lyr_Jember_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jember_11, 
                style: style_Jember_11,
                popuplayertitle: 'Jember',
                interactive: true,
    title: 'Jember<br />\
    <img src="styles/legend/Jember_11_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Jember_11_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Jember_11_2.png" /> Klaster 3<br />' });
var format_Banyuwangi_12 = new ol.format.GeoJSON();
var features_Banyuwangi_12 = format_Banyuwangi_12.readFeatures(json_Banyuwangi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banyuwangi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banyuwangi_12.addFeatures(features_Banyuwangi_12);
var lyr_Banyuwangi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banyuwangi_12, 
                style: style_Banyuwangi_12,
                popuplayertitle: 'Banyuwangi',
                interactive: true,
    title: 'Banyuwangi<br />\
    <img src="styles/legend/Banyuwangi_12_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Banyuwangi_12_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Banyuwangi_12_2.png" /> Klaster 3<br />' });
var format_Bondowoso_13 = new ol.format.GeoJSON();
var features_Bondowoso_13 = format_Bondowoso_13.readFeatures(json_Bondowoso_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bondowoso_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bondowoso_13.addFeatures(features_Bondowoso_13);
var lyr_Bondowoso_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bondowoso_13, 
                style: style_Bondowoso_13,
                popuplayertitle: 'Bondowoso',
                interactive: true,
    title: 'Bondowoso<br />\
    <img src="styles/legend/Bondowoso_13_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bondowoso_13_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bondowoso_13_2.png" /> Klaster 3<br />' });
var format_Situbondo_14 = new ol.format.GeoJSON();
var features_Situbondo_14 = format_Situbondo_14.readFeatures(json_Situbondo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Situbondo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Situbondo_14.addFeatures(features_Situbondo_14);
var lyr_Situbondo_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Situbondo_14, 
                style: style_Situbondo_14,
                popuplayertitle: 'Situbondo',
                interactive: true,
    title: 'Situbondo<br />\
    <img src="styles/legend/Situbondo_14_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Situbondo_14_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Situbondo_14_2.png" /> Klaster 3<br />' });
var format_Probolinggo_15 = new ol.format.GeoJSON();
var features_Probolinggo_15 = format_Probolinggo_15.readFeatures(json_Probolinggo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Probolinggo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Probolinggo_15.addFeatures(features_Probolinggo_15);
var lyr_Probolinggo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Probolinggo_15, 
                style: style_Probolinggo_15,
                popuplayertitle: 'Probolinggo',
                interactive: true,
    title: 'Probolinggo<br />\
    <img src="styles/legend/Probolinggo_15_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Probolinggo_15_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Probolinggo_15_2.png" /> Klaster 3<br />' });
var format_KotaProbolinggo_16 = new ol.format.GeoJSON();
var features_KotaProbolinggo_16 = format_KotaProbolinggo_16.readFeatures(json_KotaProbolinggo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaProbolinggo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaProbolinggo_16.addFeatures(features_KotaProbolinggo_16);
var lyr_KotaProbolinggo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaProbolinggo_16, 
                style: style_KotaProbolinggo_16,
                popuplayertitle: 'Kota Probolinggo',
                interactive: true,
    title: 'Kota Probolinggo<br />\
    <img src="styles/legend/KotaProbolinggo_16_0.png" /> Klaster 3<br />' });
var format_Pasuruan_17 = new ol.format.GeoJSON();
var features_Pasuruan_17 = format_Pasuruan_17.readFeatures(json_Pasuruan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasuruan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasuruan_17.addFeatures(features_Pasuruan_17);
var lyr_Pasuruan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasuruan_17, 
                style: style_Pasuruan_17,
                popuplayertitle: 'Pasuruan',
                interactive: true,
    title: 'Pasuruan<br />\
    <img src="styles/legend/Pasuruan_17_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pasuruan_17_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pasuruan_17_2.png" /> Klaster 3<br />' });
var format_KotaPasuruan_18 = new ol.format.GeoJSON();
var features_KotaPasuruan_18 = format_KotaPasuruan_18.readFeatures(json_KotaPasuruan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPasuruan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPasuruan_18.addFeatures(features_KotaPasuruan_18);
var lyr_KotaPasuruan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPasuruan_18, 
                style: style_KotaPasuruan_18,
                popuplayertitle: 'Kota Pasuruan',
                interactive: true,
    title: 'Kota Pasuruan<br />\
    <img src="styles/legend/KotaPasuruan_18_0.png" /> Klaster 3<br />' });
var format_Sidoarjo_19 = new ol.format.GeoJSON();
var features_Sidoarjo_19 = format_Sidoarjo_19.readFeatures(json_Sidoarjo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sidoarjo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sidoarjo_19.addFeatures(features_Sidoarjo_19);
var lyr_Sidoarjo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sidoarjo_19, 
                style: style_Sidoarjo_19,
                popuplayertitle: 'Sidoarjo',
                interactive: true,
    title: 'Sidoarjo<br />\
    <img src="styles/legend/Sidoarjo_19_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sidoarjo_19_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sidoarjo_19_2.png" /> Klaster 3<br />' });
var format_Mojokerto_20 = new ol.format.GeoJSON();
var features_Mojokerto_20 = format_Mojokerto_20.readFeatures(json_Mojokerto_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mojokerto_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mojokerto_20.addFeatures(features_Mojokerto_20);
var lyr_Mojokerto_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mojokerto_20, 
                style: style_Mojokerto_20,
                popuplayertitle: 'Mojokerto',
                interactive: true,
    title: 'Mojokerto<br />\
    <img src="styles/legend/Mojokerto_20_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Mojokerto_20_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Mojokerto_20_2.png" /> Klaster 3<br />' });
var format_KotaMojokerto_21 = new ol.format.GeoJSON();
var features_KotaMojokerto_21 = format_KotaMojokerto_21.readFeatures(json_KotaMojokerto_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMojokerto_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMojokerto_21.addFeatures(features_KotaMojokerto_21);
var lyr_KotaMojokerto_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMojokerto_21, 
                style: style_KotaMojokerto_21,
                popuplayertitle: 'Kota Mojokerto',
                interactive: true,
    title: 'Kota Mojokerto<br />\
    <img src="styles/legend/KotaMojokerto_21_0.png" /> Klaster 3<br />' });
var format_Jombang_22 = new ol.format.GeoJSON();
var features_Jombang_22 = format_Jombang_22.readFeatures(json_Jombang_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jombang_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jombang_22.addFeatures(features_Jombang_22);
var lyr_Jombang_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jombang_22, 
                style: style_Jombang_22,
                popuplayertitle: 'Jombang',
                interactive: true,
    title: 'Jombang<br />\
    <img src="styles/legend/Jombang_22_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Jombang_22_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Jombang_22_2.png" /> Klaster 3<br />' });
var format_Ngajuk_23 = new ol.format.GeoJSON();
var features_Ngajuk_23 = format_Ngajuk_23.readFeatures(json_Ngajuk_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngajuk_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngajuk_23.addFeatures(features_Ngajuk_23);
var lyr_Ngajuk_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngajuk_23, 
                style: style_Ngajuk_23,
                popuplayertitle: 'Ngajuk',
                interactive: true,
    title: 'Ngajuk<br />\
    <img src="styles/legend/Ngajuk_23_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ngajuk_23_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ngajuk_23_2.png" /> Klaster 3<br />' });
var format_Madiun_24 = new ol.format.GeoJSON();
var features_Madiun_24 = format_Madiun_24.readFeatures(json_Madiun_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madiun_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madiun_24.addFeatures(features_Madiun_24);
var lyr_Madiun_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madiun_24, 
                style: style_Madiun_24,
                popuplayertitle: 'Madiun',
                interactive: true,
    title: 'Madiun<br />\
    <img src="styles/legend/Madiun_24_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Madiun_24_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Madiun_24_2.png" /> Klaster 3<br />' });
var format_KotaMadiun_25 = new ol.format.GeoJSON();
var features_KotaMadiun_25 = format_KotaMadiun_25.readFeatures(json_KotaMadiun_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMadiun_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMadiun_25.addFeatures(features_KotaMadiun_25);
var lyr_KotaMadiun_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMadiun_25, 
                style: style_KotaMadiun_25,
                popuplayertitle: 'Kota Madiun',
                interactive: true,
    title: 'Kota Madiun<br />\
    <img src="styles/legend/KotaMadiun_25_0.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaMadiun_25_1.png" /> Klaster 3<br />' });
var format_Magetan_26 = new ol.format.GeoJSON();
var features_Magetan_26 = format_Magetan_26.readFeatures(json_Magetan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magetan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magetan_26.addFeatures(features_Magetan_26);
var lyr_Magetan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magetan_26, 
                style: style_Magetan_26,
                popuplayertitle: 'Magetan',
                interactive: true,
    title: 'Magetan<br />\
    <img src="styles/legend/Magetan_26_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Magetan_26_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Magetan_26_2.png" /> Klaster 3<br />' });
var format_Ngawi_27 = new ol.format.GeoJSON();
var features_Ngawi_27 = format_Ngawi_27.readFeatures(json_Ngawi_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngawi_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngawi_27.addFeatures(features_Ngawi_27);
var lyr_Ngawi_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngawi_27, 
                style: style_Ngawi_27,
                popuplayertitle: 'Ngawi',
                interactive: true,
    title: 'Ngawi<br />\
    <img src="styles/legend/Ngawi_27_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ngawi_27_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ngawi_27_2.png" /> Klaster 3<br />' });
var format_Bojonegoro_28 = new ol.format.GeoJSON();
var features_Bojonegoro_28 = format_Bojonegoro_28.readFeatures(json_Bojonegoro_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bojonegoro_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bojonegoro_28.addFeatures(features_Bojonegoro_28);
var lyr_Bojonegoro_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bojonegoro_28, 
                style: style_Bojonegoro_28,
                popuplayertitle: 'Bojonegoro',
                interactive: true,
    title: 'Bojonegoro<br />\
    <img src="styles/legend/Bojonegoro_28_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bojonegoro_28_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bojonegoro_28_2.png" /> Klaster 3<br />' });
var format_Tuban_29 = new ol.format.GeoJSON();
var features_Tuban_29 = format_Tuban_29.readFeatures(json_Tuban_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuban_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuban_29.addFeatures(features_Tuban_29);
var lyr_Tuban_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuban_29, 
                style: style_Tuban_29,
                popuplayertitle: 'Tuban',
                interactive: true,
    title: 'Tuban<br />\
    <img src="styles/legend/Tuban_29_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Tuban_29_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Tuban_29_2.png" /> Klaster 3<br />' });
var format_Lamongan_30 = new ol.format.GeoJSON();
var features_Lamongan_30 = format_Lamongan_30.readFeatures(json_Lamongan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lamongan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lamongan_30.addFeatures(features_Lamongan_30);
var lyr_Lamongan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lamongan_30, 
                style: style_Lamongan_30,
                popuplayertitle: 'Lamongan',
                interactive: true,
    title: 'Lamongan<br />\
    <img src="styles/legend/Lamongan_30_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Lamongan_30_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Lamongan_30_2.png" /> Klaster 3<br />' });
var format_Gresik_31 = new ol.format.GeoJSON();
var features_Gresik_31 = format_Gresik_31.readFeatures(json_Gresik_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gresik_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gresik_31.addFeatures(features_Gresik_31);
var lyr_Gresik_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gresik_31, 
                style: style_Gresik_31,
                popuplayertitle: 'Gresik',
                interactive: true,
    title: 'Gresik<br />\
    <img src="styles/legend/Gresik_31_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Gresik_31_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Gresik_31_2.png" /> Klaster 3<br />' });
var format_Bangkalan_32 = new ol.format.GeoJSON();
var features_Bangkalan_32 = format_Bangkalan_32.readFeatures(json_Bangkalan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangkalan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangkalan_32.addFeatures(features_Bangkalan_32);
var lyr_Bangkalan_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangkalan_32, 
                style: style_Bangkalan_32,
                popuplayertitle: 'Bangkalan',
                interactive: true,
    title: 'Bangkalan<br />\
    <img src="styles/legend/Bangkalan_32_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bangkalan_32_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bangkalan_32_2.png" /> Klaster 3<br />' });
var format_Sampang_33 = new ol.format.GeoJSON();
var features_Sampang_33 = format_Sampang_33.readFeatures(json_Sampang_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sampang_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sampang_33.addFeatures(features_Sampang_33);
var lyr_Sampang_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sampang_33, 
                style: style_Sampang_33,
                popuplayertitle: 'Sampang',
                interactive: true,
    title: 'Sampang<br />\
    <img src="styles/legend/Sampang_33_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sampang_33_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sampang_33_2.png" /> Klaster 3<br />' });
var format_Pamekasan_34 = new ol.format.GeoJSON();
var features_Pamekasan_34 = format_Pamekasan_34.readFeatures(json_Pamekasan_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pamekasan_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pamekasan_34.addFeatures(features_Pamekasan_34);
var lyr_Pamekasan_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pamekasan_34, 
                style: style_Pamekasan_34,
                popuplayertitle: 'Pamekasan',
                interactive: true,
    title: 'Pamekasan<br />\
    <img src="styles/legend/Pamekasan_34_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pamekasan_34_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pamekasan_34_2.png" /> Klaster 3<br />' });
var format_Sumenep_35 = new ol.format.GeoJSON();
var features_Sumenep_35 = format_Sumenep_35.readFeatures(json_Sumenep_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumenep_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumenep_35.addFeatures(features_Sumenep_35);
var lyr_Sumenep_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumenep_35, 
                style: style_Sumenep_35,
                popuplayertitle: 'Sumenep',
                interactive: true,
    title: 'Sumenep<br />\
    <img src="styles/legend/Sumenep_35_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sumenep_35_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sumenep_35_2.png" /> Klaster 3<br />' });
var format_Surabaya_36 = new ol.format.GeoJSON();
var features_Surabaya_36 = format_Surabaya_36.readFeatures(json_Surabaya_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surabaya_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surabaya_36.addFeatures(features_Surabaya_36);
var lyr_Surabaya_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surabaya_36, 
                style: style_Surabaya_36,
                popuplayertitle: 'Surabaya',
                interactive: true,
    title: 'Surabaya<br />\
    <img src="styles/legend/Surabaya_36_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Surabaya_36_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Surabaya_36_2.png" /> Klaster 3<br />' });
var format_Batu_37 = new ol.format.GeoJSON();
var features_Batu_37 = format_Batu_37.readFeatures(json_Batu_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batu_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batu_37.addFeatures(features_Batu_37);
var lyr_Batu_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batu_37, 
                style: style_Batu_37,
                popuplayertitle: 'Batu',
                interactive: true,
    title: 'Batu<br />\
    <img src="styles/legend/Batu_37_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Batu_37_1.png" /> Klaster 2<br />' });
var format_BatasKabupaten_38 = new ol.format.GeoJSON();
var features_BatasKabupaten_38 = format_BatasKabupaten_38.readFeatures(json_BatasKabupaten_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_38.addFeatures(features_BatasKabupaten_38);
var lyr_BatasKabupaten_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_38, 
                style: style_BatasKabupaten_38,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_38.png" /> Batas Kabupaten'
            });
var group_ClusterESGperKabupatenKotaJawaTimur = new ol.layer.Group({
                                layers: [lyr_Pacitan_0,lyr_Ponorogo_1,lyr_Trenggalek_2,lyr_Tulungagung_3,lyr_Blitar_4,lyr_KotaBlitar_5,lyr_Kediri_6,lyr_KotaKediri_7,lyr_Malang_8,lyr_KotaMalang_9,lyr_Lumajang_10,lyr_Jember_11,lyr_Banyuwangi_12,lyr_Bondowoso_13,lyr_Situbondo_14,lyr_Probolinggo_15,lyr_KotaProbolinggo_16,lyr_Pasuruan_17,lyr_KotaPasuruan_18,lyr_Sidoarjo_19,lyr_Mojokerto_20,lyr_KotaMojokerto_21,lyr_Jombang_22,lyr_Ngajuk_23,lyr_Madiun_24,lyr_KotaMadiun_25,lyr_Magetan_26,lyr_Ngawi_27,lyr_Bojonegoro_28,lyr_Tuban_29,lyr_Lamongan_30,lyr_Gresik_31,lyr_Bangkalan_32,lyr_Sampang_33,lyr_Pamekasan_34,lyr_Sumenep_35,lyr_Surabaya_36,lyr_Batu_37,],
                                fold: 'open',
                                title: 'Cluster ESG per Kabupaten/Kota Jawa Timur'});

lyr_Pacitan_0.setVisible(true);lyr_Ponorogo_1.setVisible(true);lyr_Trenggalek_2.setVisible(true);lyr_Tulungagung_3.setVisible(true);lyr_Blitar_4.setVisible(true);lyr_KotaBlitar_5.setVisible(true);lyr_Kediri_6.setVisible(true);lyr_KotaKediri_7.setVisible(true);lyr_Malang_8.setVisible(true);lyr_KotaMalang_9.setVisible(true);lyr_Lumajang_10.setVisible(true);lyr_Jember_11.setVisible(true);lyr_Banyuwangi_12.setVisible(true);lyr_Bondowoso_13.setVisible(true);lyr_Situbondo_14.setVisible(true);lyr_Probolinggo_15.setVisible(true);lyr_KotaProbolinggo_16.setVisible(true);lyr_Pasuruan_17.setVisible(true);lyr_KotaPasuruan_18.setVisible(true);lyr_Sidoarjo_19.setVisible(true);lyr_Mojokerto_20.setVisible(true);lyr_KotaMojokerto_21.setVisible(true);lyr_Jombang_22.setVisible(true);lyr_Ngajuk_23.setVisible(true);lyr_Madiun_24.setVisible(true);lyr_KotaMadiun_25.setVisible(true);lyr_Magetan_26.setVisible(true);lyr_Ngawi_27.setVisible(true);lyr_Bojonegoro_28.setVisible(true);lyr_Tuban_29.setVisible(true);lyr_Lamongan_30.setVisible(true);lyr_Gresik_31.setVisible(true);lyr_Bangkalan_32.setVisible(true);lyr_Sampang_33.setVisible(true);lyr_Pamekasan_34.setVisible(true);lyr_Sumenep_35.setVisible(true);lyr_Surabaya_36.setVisible(true);lyr_Batu_37.setVisible(true);lyr_BatasKabupaten_38.setVisible(true);
var layersList = [group_ClusterESGperKabupatenKotaJawaTimur,lyr_BatasKabupaten_38];
lyr_Pacitan_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ponorogo_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Trenggalek_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Tulungagung_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Blitar_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaBlitar_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Kediri_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaKediri_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Malang_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMalang_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Lumajang_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Jember_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Banyuwangi_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bondowoso_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Situbondo_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Probolinggo_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaProbolinggo_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Pasuruan_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaPasuruan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sidoarjo_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Mojokerto_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMojokerto_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Jombang_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ngajuk_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Madiun_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMadiun_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Magetan_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ngawi_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bojonegoro_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Tuban_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Lamongan_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Gresik_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bangkalan_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sampang_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Pamekasan_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sumenep_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Surabaya_36.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Batu_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_BatasKabupaten_38.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'periode': 'periode', 'idkab': 'idkab', 'sumber': 'sumber', });
lyr_Pacitan_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ponorogo_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Trenggalek_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Tulungagung_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Blitar_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaBlitar_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Kediri_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaKediri_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Malang_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMalang_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Lumajang_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Jember_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Banyuwangi_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bondowoso_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Situbondo_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Probolinggo_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaProbolinggo_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Pasuruan_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaPasuruan_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sidoarjo_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Mojokerto_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMojokerto_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Jombang_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ngajuk_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Madiun_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMadiun_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Magetan_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ngawi_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bojonegoro_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Tuban_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Lamongan_30.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Gresik_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bangkalan_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sampang_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Pamekasan_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sumenep_35.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Surabaya_36.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Batu_37.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_BatasKabupaten_38.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'periode': 'TextEdit', 'idkab': 'TextEdit', 'sumber': 'TextEdit', });
lyr_Pacitan_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ponorogo_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Trenggalek_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Tulungagung_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Blitar_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaBlitar_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Kediri_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaKediri_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Malang_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMalang_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Lumajang_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Jember_11.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Banyuwangi_12.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bondowoso_13.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Situbondo_14.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Probolinggo_15.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaProbolinggo_16.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Pasuruan_17.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaPasuruan_18.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sidoarjo_19.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Mojokerto_20.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMojokerto_21.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Jombang_22.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ngajuk_23.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Madiun_24.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMadiun_25.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Magetan_26.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ngawi_27.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bojonegoro_28.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Tuban_29.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Lamongan_30.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Gresik_31.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bangkalan_32.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sampang_33.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Pamekasan_34.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sumenep_35.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Surabaya_36.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Batu_37.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_BatasKabupaten_38.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'periode': 'no label', 'idkab': 'no label', 'sumber': 'no label', });
lyr_BatasKabupaten_38.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});