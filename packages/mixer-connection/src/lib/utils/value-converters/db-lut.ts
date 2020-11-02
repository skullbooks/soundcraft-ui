/**
 * Lookup table (LUT) for conversion between dB <=> linear fader values
 */
export const dBLinearLUT: [number, number][] = [
  [-Infinity, 0],
  [-100, 0.00126941502],
  [-99, 0.0014193058],
  [-98, 0.00158625841],
  [-97, 0.00177210569],
  [-96, 0.0019787848],
  [-95, 0.00220842659],
  [-94, 0.00246331096],
  [-93, 0.00274592638],
  [-92, 0.00305891037],
  [-91, 0.00340510905],
  [-90, 0.00378751755],
  [-89, 0.00420932472],
  [-88, 0.00467389822],
  [-87, 0.00518476963],
  [-86, 0.00574563444],
  [-85, 0.00636033714],
  [-84, 0.00703287125],
  [-83, 0.00776734948],
  [-82, 0.00856804848],
  [-81, 0.00943937898],
  [-80, 0.01038584113],
  [-79, 0.01141215861],
  [-78, 0.01252317429],
  [-77, 0.01372399926],
  [-76, 0.01501996815],
  [-75, 0.0164167881],
  [-74, 0.01792064309],
  [-73, 0.01953828335],
  [-72, 0.02127727866],
  [-71, 0.02314623445],
  [-70, 0.02515518665],
  [-69, 0.02731607854],
  [-68, 0.02964346856],
  [-67, 0.03215561062],
  [-66, 0.03487607837],
  [-65, 0.0378363952],
  [-64, 0.04108065367],
  [-63, 0.04467409104],
  [-62, 0.04872117192],
  [-61, 0.05341050774],
  [-60, 0.05882352591],
  [-59, 0.06435465068],
  [-58, 0.06995738298],
  [-57, 0.07563393563],
  [-56, 0.08138664067],
  [-55, 0.08721791208],
  [-54, 0.09313031286],
  [-53, 0.09912653267],
  [-52, 0.10520938411],
  [-51, 0.11138185114],
  [-50, 0.11764705926],
  [-49, 0.12400831282],
  [-48, 0.13046910241],
  [-47, 0.13703311235],
  [-46, 0.14370423928],
  [-45, 0.15048661083],
  [-44, 0.15738460608],
  [-43, 0.16440286487],
  [-42, 0.17154632322],
  [-41, 0.17882022634],
  [-40, 0.18623016588],
  [-39, 0.19378209766],
  [-38, 0.20148238726],
  [-37, 0.20933783613],
  [-36, 0.21735573001],
  [-35, 0.22554387664],
  [-34, 0.23391066305],
  [-33, 0.24246510724],
  [-32, 0.25121692196],
  [-31, 0.26017658552],
  [-30, 0.26935542002],
  [-29.9, 0.27028582105],
  [-29.8, 0.27121854806],
  [-29.7, 0.27215361455],
  [-29.6, 0.2730910331],
  [-29.5, 0.27403081628],
  [-29.4, 0.27497297851],
  [-29.3, 0.27591753239],
  [-29.2, 0.2768644914],
  [-29.1, 0.27781386906],
  [-29, 0.27876567934],
  [-28.9, 0.27971993526],
  [-28.8, 0.28067665175],
  [-28.7, 0.28163584229],
  [-28.6, 0.28259752039],
  [-28.5, 0.28356170142],
  [-28.4, 0.28452839889],
  [-28.3, 0.28549762792],
  [-28.2, 0.28646940272],
  [-28.1, 0.2874437375],
  [-28, 0.28842064831],
  [-27.9, 0.28940014914],
  [-27.8, 0.29038225533],
  [-27.7, 0.29136698227],
  [-27.6, 0.29235434486],
  [-27.5, 0.29334435938],
  [-27.4, 0.29433704074],
  [-27.3, 0.29533240478],
  [-27.2, 0.2963304678],
  [-27.1, 0.29733124515],
  [-27, 0.29833475361],
  [-26.9, 0.29934100923],
  [-26.8, 0.30035002832],
  [-26.7, 0.30136182765],
  [-26.6, 0.3023764235],
  [-26.5, 0.30339383334],
  [-26.4, 0.30441407394],
  [-26.3, 0.30543716229],
  [-26.2, 0.30646311585],
  [-26.1, 0.30749195209],
  [-26, 0.30852368847],
  [-25.9, 0.30955834268],
  [-25.8, 0.31059593312],
  [-25.7, 0.31163647724],
  [-25.6, 0.31267999392],
  [-25.5, 0.31372650107],
  [-25.4, 0.31477601733],
  [-25.3, 0.31582856132],
  [-25.2, 0.31688415236],
  [-25.1, 0.31794280931],
  [-25, 0.31900455104],
  [-24.9, 0.32006939733],
  [-24.8, 0.32113736775],
  [-24.7, 0.32220848184],
  [-24.6, 0.32328275964],
  [-24.5, 0.32436022116],
  [-24.4, 0.32544088666],
  [-24.3, 0.32652477687],
  [-24.2, 0.32761191227],
  [-24.1, 0.32870231359],
  [-24, 0.32979600201],
  [-23.9, 0.33089299873],
  [-23.8, 0.33199332491],
  [-23.7, 0.33309700247],
  [-23.6, 0.33420405304],
  [-23.5, 0.33531449875],
  [-23.4, 0.33642836171],
  [-23.3, 0.33754566452],
  [-23.2, 0.33866642928],
  [-23.1, 0.33979067928],
  [-23, 0.34091843711],
  [-22.9, 0.34204972652],
  [-22.8, 0.34318457078],
  [-22.7, 0.34432299319],
  [-22.6, 0.34546501818],
  [-22.5, 0.34661066951],
  [-22.4, 0.3477599714],
  [-22.3, 0.34891294874],
  [-22.2, 0.35006962623],
  [-22.1, 0.35123002878],
  [-22, 0.35239418154],
  [-21.9, 0.35356211034],
  [-21.8, 0.35473384033],
  [-21.7, 0.35590939806],
  [-21.6, 0.35708880937],
  [-21.5, 0.35827210057],
  [-21.4, 0.35945929866],
  [-21.3, 0.36065043067],
  [-21.2, 0.36184552335],
  [-21.1, 0.36304460443],
  [-21, 0.3642477016],
  [-20.9, 0.36545484257],
  [-20.8, 0.36666605598],
  [-20.7, 0.36788136989],
  [-20.6, 0.36910081329],
  [-20.5, 0.37032441515],
  [-20.4, 0.37155220495],
  [-20.3, 0.37278421177],
  [-20.2, 0.37402046612],
  [-20.1, 0.37526099756],
  [-20, 0.37650583661],
  [-19.9, 0.37775501423],
  [-19.8, 0.37900856114],
  [-19.7, 0.38026650855],
  [-19.6, 0.38152888836],
  [-19.5, 0.38279573224],
  [-19.4, 0.38406707242],
  [-19.3, 0.38534294115],
  [-19.2, 0.38662337163],
  [-19.1, 0.38790839631],
  [-19, 0.3891980492],
  [-18.9, 0.3904923636],
  [-18.8, 0.39179137361],
  [-18.7, 0.39309511357],
  [-18.6, 0.39440361829],
  [-18.5, 0.39571692259],
  [-18.4, 0.39703506161],
  [-18.3, 0.39835807122],
  [-18.2, 0.39968598739],
  [-18.1, 0.40101884631],
  [-18, 0.40235668444],
  [-17.9, 0.40369953902],
  [-17.8, 0.40504744719],
  [-17.7, 0.40640044678],
  [-17.6, 0.4077585754],
  [-17.5, 0.40912187181],
  [-17.4, 0.41049037443],
  [-17.3, 0.41186412238],
  [-17.2, 0.413243155],
  [-17.1, 0.41462751222],
  [-17, 0.41601723386],
  [-16.9, 0.41741236055],
  [-16.8, 0.41881293315],
  [-16.7, 0.42021899263],
  [-16.6, 0.42163058079],
  [-16.5, 0.42304773943],
  [-16.4, 0.4244705108],
  [-16.3, 0.42589893762],
  [-16.2, 0.42733306286],
  [-16.1, 0.42877293006],
  [-16, 0.43021858274],
  [-15.9, 0.43167006527],
  [-15.8, 0.433127422],
  [-15.7, 0.43459069787],
  [-15.6, 0.43605993828],
  [-15.5, 0.43753518863],
  [-15.4, 0.43901649513],
  [-15.3, 0.44050390413],
  [-15.2, 0.4419974623],
  [-15.1, 0.44349721679],
  [-15, 0.44500321534],
  [-14.9, 0.44651550555],
  [-14.8, 0.44803413586],
  [-14.7, 0.4495591548],
  [-14.6, 0.4510906114],
  [-14.5, 0.45262855513],
  [-14.4, 0.45417303545],
  [-14.3, 0.45572410279],
  [-14.2, 0.45728180732],
  [-14.1, 0.45884620002],
  [-14, 0.46041733201],
  [-13.9, 0.46199525474],
  [-13.8, 0.46358002012],
  [-13.7, 0.46517168032],
  [-13.6, 0.46677028784],
  [-13.5, 0.46837589552],
  [-13.4, 0.46998855658],
  [-13.3, 0.47160832456],
  [-13.2, 0.47323525313],
  [-13.1, 0.47486939642],
  [-13, 0.47651080892],
  [-12.9, 0.47815954522],
  [-12.8, 0.47981566039],
  [-12.7, 0.4814792095],
  [-12.6, 0.48315024807],
  [-12.5, 0.48482883186],
  [-12.4, 0.48651501676],
  [-12.3, 0.48820885899],
  [-12.2, 0.48991041491],
  [-12.1, 0.49161974108],
  [-12, 0.49333689432],
  [-11.9, 0.49506193132],
  [-11.8, 0.49679490936],
  [-11.7, 0.49853588548],
  [-11.6, 0.50028491695],
  [-11.5, 0.5020420613],
  [-11.4, 0.50380737579],
  [-11.3, 0.50558091793],
  [-11.2, 0.50736274524],
  [-11.1, 0.50915291533],
  [-11, 0.51095148548],
  [-10.9, 0.51275851321],
  [-10.8, 0.51457405591],
  [-10.7, 0.51639817073],
  [-10.6, 0.51823091484],
  [-10.5, 0.52007234516],
  [-10.4, 0.52192251827],
  [-10.3, 0.52378149075],
  [-10.2, 0.52564931882],
  [-10.1, 0.52752605826],
  [-10, 0.5294117647],
  [-9.9, 0.53130649327],
  [-9.8, 0.53321029863],
  [-9.7, 0.53512323508],
  [-9.6, 0.53704535618],
  [-9.5, 0.53897671518],
  [-9.4, 0.54091736441],
  [-9.3, 0.54286735586],
  [-9.2, 0.54482674052],
  [-9.1, 0.54679556866],
  [-9, 0.54877388978],
  [-8.9, 0.5507617523],
  [-8.8, 0.55275920394],
  [-8.7, 0.55476629105],
  [-8.6, 0.55678305926],
  [-8.5, 0.55880955269],
  [-8.4, 0.56084581441],
  [-8.3, 0.5628918861],
  [-8.2, 0.56494780804],
  [-8.1, 0.56701361912],
  [-8, 0.56908935658],
  [-7.9, 0.57117505604],
  [-7.8, 0.57327075163],
  [-7.7, 0.57537647523],
  [-7.6, 0.57749225723],
  [-7.5, 0.5796181258],
  [-7.4, 0.58175410703],
  [-7.3, 0.58390022506],
  [-7.2, 0.58605650149],
  [-7.1, 0.58822295559],
  [-7, 0.59039960429],
  [-6.9, 0.59258646169],
  [-6.8, 0.59478353942],
  [-6.7, 0.59699084621],
  [-6.6, 0.59920838778],
  [-6.5, 0.60143616702],
  [-6.4, 0.60367418348],
  [-6.3, 0.60592243349],
  [-6.2, 0.60818091012],
  [-6.1, 0.61044960283],
  [-6, 0.61272849748],
  [-5.9, 0.6150175762],
  [-5.8, 0.61731681728],
  [-5.7, 0.61962619505],
  [-5.6, 0.62194567965],
  [-5.5, 0.62427523721],
  [-5.4, 0.62661482923],
  [-5.3, 0.62896441302],
  [-5.2, 0.63132394117],
  [-5.1, 0.63369336171],
  [-5, 0.63607261766],
  [-4.9, 0.63846164738],
  [-4.8, 0.64086038404],
  [-4.7, 0.64326875575],
  [-4.6, 0.6456866854],
  [-4.5, 0.64811409055],
  [-4.4, 0.65055088326],
  [-4.3, 0.65299697022],
  [-4.2, 0.65545225237],
  [-4.1, 0.6579166252],
  [-4, 0.66038997821],
  [-3.9, 0.6628721953],
  [-3.8, 0.66536315437],
  [-3.7, 0.66786272742],
  [-3.6, 0.67037078051],
  [-3.5, 0.67288717377],
  [-3.4, 0.67541176116],
  [-3.3, 0.67794439074],
  [-3.2, 0.68048490444],
  [-3.1, 0.68303313828],
  [-3, 0.685588922],
  [-2.9, 0.68815207965],
  [-2.8, 0.69072242902],
  [-2.7, 0.69329978223],
  [-2.6, 0.69588394539],
  [-2.5, 0.69847471884],
  [-2.4, 0.70107189735],
  [-2.3, 0.70367526991],
  [-2.2, 0.70628462004],
  [-2.1, 0.7088997261],
  [-2, 0.7115203609],
  [-1.9, 0.71414629236],
  [-1.8, 0.71677728344],
  [-1.7, 0.71941309224],
  [-1.6, 0.72205347242],
  [-1.5, 0.72469817317],
  [-1.4, 0.7273469395],
  [-1.3, 0.72999951243],
  [-1.2, 0.73265562946],
  [-1.1, 0.7353150243],
  [-1, 0.73797742761],
  [-0.9, 0.74064256705],
  [-0.8, 0.74331016751],
  [-0.7, 0.7459799514],
  [-0.6, 0.74865163909],
  [-0.5, 0.75132494903],
  [-0.4, 0.75399959798],
  [-0.3, 0.75667530153],
  [-0.2, 0.75935177424],
  [-0.1, 0.76202873001],
  [0, 0.76470588235],
  [0.1, 0.7673829447],
  [0.2, 0.77005963068],
  [0.3, 0.77273565461],
  [0.4, 0.77541073144],
  [0.5, 0.77808457747],
  [0.6, 0.78075691027],
  [0.7, 0.78342744932],
  [0.8, 0.78609591597],
  [0.9, 0.788762034],
  [1, 0.79142552969],
  [1.1, 0.79408613226],
  [1.2, 0.79674357391],
  [1.3, 0.79939759037],
  [1.4, 0.80204792085],
  [1.5, 0.80469430843],
  [1.6, 0.80733650032],
  [1.7, 0.80997424785],
  [1.8, 0.81260730696],
  [1.9, 0.81523543815],
  [2, 0.81785840681],
  [2.1, 0.82047598323],
  [2.2, 0.82308794296],
  [2.3, 0.82569406676],
  [2.4, 0.82829414081],
  [2.5, 0.83088795675],
  [2.6, 0.8334753119],
  [2.7, 0.83605600931],
  [2.8, 0.83862985772],
  [2.9, 0.84119667177],
  [3, 0.84375627202],
  [3.1, 0.84630848491],
  [3.2, 0.84885314284],
  [3.3, 0.85139008425],
  [3.4, 0.85391915357],
  [3.5, 0.85644020114],
  [3.6, 0.85895308337],
  [3.7, 0.86145766254],
  [3.8, 0.86395380691],
  [3.9, 0.86644139059],
  [4, 0.86892029358],
  [4.1, 0.87139040159],
  [4.2, 0.87385160607],
  [4.3, 0.87630380417],
  [4.4, 0.87874689855],
  [4.5, 0.8811807974],
  [4.6, 0.8836054143],
  [4.7, 0.88602066817],
  [4.8, 0.88842648314],
  [4.9, 0.89082278844],
  [5, 0.89320951837],
  [5.1, 0.89558661211],
  [5.2, 0.89795401365],
  [5.3, 0.90031167166],
  [5.4, 0.90265953944],
  [5.5, 0.9049975747],
  [5.6, 0.90732573954],
  [5.7, 0.90964400026],
  [5.8, 0.91195232733],
  [5.9, 0.91425069513],
  [6, 0.91653908203],
  [6.1, 0.91881747005],
  [6.2, 0.92108584497],
  [6.3, 0.92334419597],
  [6.4, 0.92559251573],
  [6.5, 0.92783080021],
  [6.6, 0.93005904852],
  [6.7, 0.93227726285],
  [6.8, 0.93448544835],
  [6.9, 0.93668361302],
  [7, 0.93887176758],
  [7.1, 0.94104992537],
  [7.2, 0.9432181023],
  [7.3, 0.94537631667],
  [7.4, 0.94752458909],
  [7.5, 0.94966294241],
  [7.6, 0.9517914016],
  [7.7, 0.95390999367],
  [7.8, 0.95601874754],
  [7.9, 0.95811769404],
  [8, 0.96020686568],
  [8.1, 0.96228629674],
  [8.2, 0.96435602299],
  [8.3, 0.96641608179],
  [8.4, 0.96846651193],
  [8.5, 0.97050735351],
  [8.6, 0.97253864795],
  [8.7, 0.9745604379],
  [8.8, 0.9765727671],
  [8.9, 0.97857568043],
  [9, 0.98056922374],
  [9.1, 0.98255344384],
  [9.2, 0.98452838843],
  [9.3, 0.98649410604],
  [9.4, 0.98845064599],
  [9.5, 0.99039805829],
  [9.6, 0.99233639364],
  [9.7, 0.99426570335],
  [9.8, 0.9961860393],
  [9.9, 0.99809745389],
  [10, 1],
  [Infinity, 1],
];
