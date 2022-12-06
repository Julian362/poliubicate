mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFuZ2EzNjIiLCJhIjoiY2xhenNhZXZ6MTBmYjNwcHVhZG9qaXZ5ZSJ9.RxECklaTwyuFUE8PDEYCng';


const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/julianga362/clazttq95000314rz85zd56zg', // style URL
    center: [-75.577164, 6.210925], // starting position [lng, lat]
    zoom: 17.77, // starting zoom
    bearing: 96.00,
    pitch: 2.00
});

map.on('load', () => {
    // Add a source for the state polygons.
    map.addSource('bloques', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 1</strong><p>descripción 1</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577186,
                                    6.212011
                                ],
                                [
                                    -75.577204,
                                    6.2118
                                ],
                                [
                                    -75.577562,
                                    6.211806
                                ],
                                [
                                    -75.577559,
                                    6.212031
                                ],
                                [
                                    -75.577186,
                                    6.212011
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "11a3a143a0aa52b35af5d46115ce4dc9"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 2</strong><p>descripción 2</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577568,
                                    6.211774
                                ],
                                [
                                    -75.577582,
                                    6.2116
                                ],
                                [
                                    -75.577173,
                                    6.211564
                                ],
                                [
                                    -75.577153,
                                    6.211746
                                ],
                                [
                                    -75.577568,
                                    6.211774
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "1206503b812af08c2a75e83140e51a34"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 3</strong><p>descripción 3</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577259,
                                    6.210389
                                ],
                                [
                                    -75.577825,
                                    6.210449
                                ],
                                [
                                    -75.577921,
                                    6.209501
                                ],
                                [
                                    -75.577355,
                                    6.209444
                                ],
                                [
                                    -75.577259,
                                    6.210389
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "217ec5e716594128b6d975c84c7d33fd"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 4</strong><p>descripción 4</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576582,
                                    6.21182
                                ],
                                [
                                    -75.576601,
                                    6.211636
                                ],
                                [
                                    -75.576779,
                                    6.211654
                                ],
                                [
                                    -75.576759,
                                    6.211839
                                ],
                                [
                                    -75.576582,
                                    6.21182
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "3506cf00e06a385026867193384dce2b"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 7</strong><p>descripción 7</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576812,
                                    6.211616
                                ],
                                [
                                    -75.576827,
                                    6.21147
                                ],
                                [
                                    -75.577115,
                                    6.211501
                                ],
                                [
                                    -75.577099,
                                    6.211648
                                ],
                                [
                                    -75.576812,
                                    6.211616
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "3824c152ab2798d2f3b11eb54d51f075"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 8</strong><p>descripción 8</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577166,
                                    6.20916
                                ],
                                [
                                    -75.577315,
                                    6.209175
                                ],
                                [
                                    -75.577338,
                                    6.20891
                                ],
                                [
                                    -75.577188,
                                    6.208899
                                ],
                                [
                                    -75.577166,
                                    6.20916
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "394d915f0e648474fc43d8afab48f59b"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 9</strong><p>descripción 9</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576601,
                                    6.211637
                                ],
                                [
                                    -75.576779,
                                    6.211654
                                ],
                                [
                                    -75.576797,
                                    6.211469
                                ],
                                [
                                    -75.576621,
                                    6.211452
                                ],
                                [
                                    -75.576601,
                                    6.211637
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "43253b8cea86331f474e4041b35c7589"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 10</strong><p>descripción 10</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577232,
                                    6.211035
                                ],
                                [
                                    -75.577513,
                                    6.211041
                                ],
                                [
                                    -75.577512,
                                    6.211134
                                ],
                                [
                                    -75.577732,
                                    6.211138
                                ],
                                [
                                    -75.577736,
                                    6.210929
                                ],
                                [
                                    -75.577611,
                                    6.210927
                                ],
                                [
                                    -75.577615,
                                    6.210703
                                ],
                                [
                                    -75.577459,
                                    6.210698
                                ],
                                [
                                    -75.577457,
                                    6.210902
                                ],
                                [
                                    -75.577235,
                                    6.210898
                                ],
                                [
                                    -75.577232,
                                    6.211035
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "43778d586f393cddee8c0d7f46acad2e"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 11</strong><p>descripción 11</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.57705,
                                    6.212458
                                ],
                                [
                                    -75.577057,
                                    6.212233
                                ],
                                [
                                    -75.577133,
                                    6.212238
                                ],
                                [
                                    -75.577125,
                                    6.21246
                                ],
                                [
                                    -75.57705,
                                    6.212458
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "4d1e696f6e228661084928eaab1258a4"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 12</strong><p>descripción 12</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.57664,
                                    6.211268
                                ],
                                [
                                    -75.576817,
                                    6.211284
                                ],
                                [
                                    -75.576798,
                                    6.211469
                                ],
                                [
                                    -75.576621,
                                    6.211452
                                ],
                                [
                                    -75.57664,
                                    6.211268
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "5686acdbc7d36c2dbf5397e4361a0021"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 13</strong><p>descripción 13</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576743,
                                    6.210707
                                ],
                                [
                                    -75.576766,
                                    6.210401
                                ],
                                [
                                    -75.576972,
                                    6.210447
                                ],
                                [
                                    -75.577129,
                                    6.210453
                                ],
                                [
                                    -75.577265,
                                    6.21046
                                ],
                                [
                                    -75.57722,
                                    6.210785
                                ],
                                [
                                    -75.576979,
                                    6.210728
                                ],
                                [
                                    -75.576743,
                                    6.210707
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "5e3118e547fcedb98784f3085c9b7238"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 14</strong><p>descripción 14</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577006,
                                    6.20955
                                ],
                                [
                                    -75.57704,
                                    6.20923
                                ],
                                [
                                    -75.577281,
                                    6.209255
                                ],
                                [
                                    -75.577247,
                                    6.209575
                                ],
                                [
                                    -75.577006,
                                    6.20955
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "642f1b71b3ac8fc7353c8e9711c761ce"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 15</strong><p>descripción 15</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577099,
                                    6.212228
                                ],
                                [
                                    -75.577116,
                                    6.212052
                                ],
                                [
                                    -75.577548,
                                    6.212094
                                ],
                                [
                                    -75.57754,
                                    6.212182
                                ],
                                [
                                    -75.577531,
                                    6.212267
                                ],
                                [
                                    -75.577099,
                                    6.212228
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "649a439fdf07c7679508be7ca09b042d"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 16</strong><p>descripción 16</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577601,
                                    6.209314
                                ],
                                [
                                    -75.577692,
                                    6.209322
                                ],
                                [
                                    -75.577705,
                                    6.209105
                                ],
                                [
                                    -75.577608,
                                    6.209098
                                ],
                                [
                                    -75.577601,
                                    6.209314
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "67bab9a4f9e8ce69a5c4b0b4c1992a41"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 17</strong><p>descripción 17</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576843,
                                    6.211306
                                ],
                                [
                                    -75.576862,
                                    6.211159
                                ],
                                [
                                    -75.577148,
                                    6.211193
                                ],
                                [
                                    -75.577131,
                                    6.211339
                                ],
                                [
                                    -75.576843,
                                    6.211306
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "73b0d588f8987ce82cf65d14e88635b8"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 18</strong><p>descripción 18</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576659,
                                    6.211082
                                ],
                                [
                                    -75.576639,
                                    6.211268
                                ],
                                [
                                    -75.576818,
                                    6.211283
                                ],
                                [
                                    -75.576835,
                                    6.2111
                                ],
                                [
                                    -75.576659,
                                    6.211082
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "7498137de46d707885d345e4c3ffff86"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 19</strong><p>descripción 19</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576879,
                                    6.209482
                                ],
                                [
                                    -75.576997,
                                    6.209497
                                ],
                                [
                                    -75.577022,
                                    6.209282
                                ],
                                [
                                    -75.576903,
                                    6.209267
                                ],
                                [
                                    -75.576879,
                                    6.209482
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "8314520986cd42fc06d1633305caf9c6"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 20</strong><p>descripción 20</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576654,
                                    6.211069
                                ],
                                [
                                    -75.57665,
                                    6.210999
                                ],
                                [
                                    -75.576766,
                                    6.210994
                                ],
                                [
                                    -75.576719,
                                    6.210993
                                ],
                                [
                                    -75.576721,
                                    6.21091
                                ],
                                [
                                    -75.576826,
                                    6.210911
                                ],
                                [
                                    -75.576826,
                                    6.210937
                                ],
                                [
                                    -75.576862,
                                    6.210939
                                ],
                                [
                                    -75.576861,
                                    6.210995
                                ],
                                [
                                    -75.576843,
                                    6.210994
                                ],
                                [
                                    -75.576848,
                                    6.211058
                                ],
                                [
                                    -75.576762,
                                    6.211064
                                ],
                                [
                                    -75.576654,
                                    6.211069
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "a5d50cb65094473b0587d5480b7171fd"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 21</strong><p>descripción 21</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576931,
                                    6.211072
                                ],
                                [
                                    -75.576954,
                                    6.210838
                                ],
                                [
                                    -75.577107,
                                    6.210855
                                ],
                                [
                                    -75.577082,
                                    6.211088
                                ],
                                [
                                    -75.576931,
                                    6.211072
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "b7a71d36b4b140be3b24061174efb2f0"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 22</strong><p>descripción 22</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576856,
                                    6.209801
                                ],
                                [
                                    -75.577184,
                                    6.209836
                                ],
                                [
                                    -75.577204,
                                    6.209651
                                ],
                                [
                                    -75.576875,
                                    6.209615
                                ],
                                [
                                    -75.576856,
                                    6.209801
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "cc120fdad993b8d160a24fac66c267ab"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 23</strong><p>descripción 23</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576698,
                                    6.212188
                                ],
                                [
                                    -75.5768,
                                    6.212199
                                ],
                                [
                                    -75.576816,
                                    6.212071
                                ],
                                [
                                    -75.577078,
                                    6.2121
                                ],
                                [
                                    -75.577089,
                                    6.21199
                                ],
                                [
                                    -75.576727,
                                    6.211949
                                ],
                                [
                                    -75.576698,
                                    6.212188
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "d079edd1d7bce0ecfdec35057d39a7f7"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 24</strong><p>descripción 24</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576777,
                                    6.210335
                                ],
                                [
                                    -75.577146,
                                    6.210382
                                ],
                                [
                                    -75.577169,
                                    6.210094
                                ],
                                [
                                    -75.576809,
                                    6.210061
                                ],
                                [
                                    -75.576777,
                                    6.210335
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "d2660f5e0e5801bbd5163ebc0314c31f"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 25</strong><p>descripción 25</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576779,
                                    6.210038
                                ],
                                [
                                    -75.576802,
                                    6.209836
                                ],
                                [
                                    -75.576966,
                                    6.209853
                                ],
                                [
                                    -75.576968,
                                    6.209834
                                ],
                                [
                                    -75.57708,
                                    6.209847
                                ],
                                [
                                    -75.577077,
                                    6.209867
                                ],
                                [
                                    -75.577239,
                                    6.209884
                                ],
                                [
                                    -75.577216,
                                    6.210089
                                ],
                                [
                                    -75.577157,
                                    6.210082
                                ],
                                [
                                    -75.576967,
                                    6.21006
                                ],
                                [
                                    -75.576779,
                                    6.210038
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "dcd54efeec636bd6898d7a68862de04d"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 26</strong><p>descripción 26</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.576792,
                                    6.211947
                                ],
                                [
                                    -75.57681,
                                    6.2118
                                ],
                                [
                                    -75.577095,
                                    6.211833
                                ],
                                [
                                    -75.577078,
                                    6.211979
                                ],
                                [
                                    -75.576792,
                                    6.211947
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "dee640a6e3416a29583b8d3bc0ea3be0"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 27</strong><p>descripción 27</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.57657,
                                    6.212645
                                ],
                                [
                                    -75.576612,
                                    6.212236
                                ],
                                [
                                    -75.57702,
                                    6.212277
                                ],
                                [
                                    -75.576977,
                                    6.212686
                                ],
                                [
                                    -75.57657,
                                    6.212645
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "f0e890f27826d99c524a14948c30ed77"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 28</strong><p>descripción 28</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.57746,
                                    6.209068
                                ],
                                [
                                    -75.577465,
                                    6.208957
                                ],
                                [
                                    -75.577499,
                                    6.208958
                                ],
                                [
                                    -75.577501,
                                    6.208923
                                ],
                                [
                                    -75.577611,
                                    6.208926
                                ],
                                [
                                    -75.577603,
                                    6.209073
                                ],
                                [
                                    -75.57746,
                                    6.209068
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "f684e0a70779280a0f0f574f231af031"
                },
                {
                    "type": "Feature",
                    'properties': {
                        'description':
                            '<strong>Titulo 29</strong><p>descripción 29</p>',
                        'icon': 'theatre'
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    -75.577143,
                                    6.211531
                                ],
                                [
                                    -75.577156,
                                    6.211401
                                ],
                                [
                                    -75.577162,
                                    6.211349
                                ],
                                [
                                    -75.577676,
                                    6.211402
                                ],
                                [
                                    -75.577668,
                                    6.211472
                                ],
                                [
                                    -75.577657,
                                    6.211581
                                ],
                                [
                                    -75.577143,
                                    6.211531
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    },
                    "id": "f7a6b1e385aa18cc32501cb57a09084e"
                }
            ]
        }
    });


    // Add a layer showing the state polygons.
    map.addLayer({
        'id': 'bloques-layer',
        'type': 'fill',
        'source': 'bloques',
        'paint': {
            'fill-color': '#016c21',
            'fill-opacity': 0.2,
            'fill-outline-color': '#000000'
        }
    });

    // When a click event occurs on a feature in the states layer,
    // open a popup at the location of the click, with description
    // HTML from the click event's properties.
    map.on('click', 'bloques-layer', (e) => {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    // Change the cursor to a pointer when
    // the mouse is over the states layer.
    map.on('mouseenter', 'bloques-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change the cursor back to a pointer
    // when it leaves the states layer.
    map.on('mouseleave', 'bloques-layer', () => {
        map.getCanvas().style.cursor = '';
    });

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            // When active the map will receive updates to the device's location as it changes.
            trackUserLocation: true,
            // Draw an arrow next to the location dot to indicate which direction the device is heading.
            showUserHeading: true
        })
    );
});

const playSound = function () {
    const rutas = ["../media/mp3/1.mp3",
        "../media/mp3/2.mp3",
        "../media/mp3/3.mp3",
        "../media/mp3/4.mp3",
        "../media/mp3/5.mp3",
        "../media/mp3/6.mp3",
        "../media/mp3/7.mp3",
        "../media/mp3/8.mp3",
        "../media/mp3/9.mp3",
        "../media/mp3/10.mp3",
        "../media/mp3/11.mp3"];
    const random = Math.floor(Math.random() * rutas.length);
    var sonido = new Audio(rutas[random]);
    sonido.play();
    document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);

