import { useImage } from '../hooks';

function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
        images[index] = r(item);
        return index;
    });
    return images;
}

const images = importAll(require.context('./../../../assets/RoadMap', false, /\.(png|jpe?g|svg)$/));
console.log(images);
const FramesArray = () => {
    const [AA0, AA0S] = useImage(images[0]);
    const [AA1, AA1S] = useImage(images[1]);
    const [AA2, AA2S] = useImage(images[2]);
    const [AA3, AA3S] = useImage(images[3]);
    const [AA4, AA4S] = useImage(images[4]);
    const [AA5, AA5S] = useImage(images[5]);
    const [AA6, AA6S] = useImage(images[6]);
    const [AA7, AA7S] = useImage(images[7]);
    const [AA8, AA8S] = useImage(images[8]);
    const [AA9, AA9S] = useImage(images[9]);
    const [AA10, AA10S] = useImage(images[10]);
    const [AA11, AA11S] = useImage(images[11]);
    const [AA12, AA12S] = useImage(images[12]);
    const [AA13, AA13S] = useImage(images[13]);
    const [AA14, AA14S] = useImage(images[14]);
    const [AA15, AA15S] = useImage(images[15]);
    const [AA16, AA16S] = useImage(images[16]);
    const [AA17, AA17S] = useImage(images[17]);
    const [AA18, AA18S] = useImage(images[18]);
    const [AA19, AA19S] = useImage(images[19]);
    const [AA20, AA20S] = useImage(images[20]);
    const [AA21, AA21S] = useImage(images[21]);
    const [AA22, AA22S] = useImage(images[22]);
    const [AA23, AA23S] = useImage(images[23]);
    const [AA24, AA24S] = useImage(images[24]);
    const [AA25, AA25S] = useImage(images[25]);
    const [AA26, AA26S] = useImage(images[26]);
    const [AA27, AA27S] = useImage(images[27]);
    const [AA28, AA28S] = useImage(images[28]);
    const [AA29, AA29S] = useImage(images[29]);
    const [AA30, AA30S] = useImage(images[30]);
    const [AA31, AA31S] = useImage(images[31]);
    const [AA32, AA32S] = useImage(images[32]);
    const [AA33, AA33S] = useImage(images[33]);
    const [AA34, AA34S] = useImage(images[34]);
    const [AA35, AA35S] = useImage(images[35]);
    const [AA36, AA36S] = useImage(images[36]);
    const [AA37, AA37S] = useImage(images[37]);
    const [AA38, AA38S] = useImage(images[38]);
    const [AA39, AA39S] = useImage(images[39]);
    const [AA40, AA40S] = useImage(images[40]);
    const [AA41, AA41S] = useImage(images[41]);
    const [AA42, AA42S] = useImage(images[42]);
    const [AA43, AA43S] = useImage(images[43]);
    const [AA44, AA44S] = useImage(images[44]);
    const [AA45, AA45S] = useImage(images[45]);
    const [AA46, AA46S] = useImage(images[46]);
    const [AA47, AA47S] = useImage(images[47]);
    const [AA48, AA48S] = useImage(images[48]);
    const [AA49, AA49S] = useImage(images[49]);
    const [AA50, AA50S] = useImage(images[50]);
    const [AA51, AA51S] = useImage(images[51]);
    const [AA52, AA52S] = useImage(images[52]);
    const [AA53, AA53S] = useImage(images[53]);
    const [AA54, AA54S] = useImage(images[54]);
    const [AA55, AA55S] = useImage(images[55]);
    const [AA56, AA56S] = useImage(images[56]);
    const [AA57, AA57S] = useImage(images[57]);
    const [AA58, AA58S] = useImage(images[58]);
    const [AA59, AA59S] = useImage(images[59]);
    const [AA60, AA60S] = useImage(images[60]);
    const [AA61, AA61S] = useImage(images[61]);
    const [AA62, AA62S] = useImage(images[62]);
    const [AA63, AA63S] = useImage(images[63]);
    const [AA64, AA64S] = useImage(images[64]);
    const [AA65, AA65S] = useImage(images[65]);
    const [AA66, AA66S] = useImage(images[66]);
    const [AA67, AA67S] = useImage(images[67]);
    const [AA68, AA68S] = useImage(images[68]);
    const [AA69, AA69S] = useImage(images[69]);
    const [AA70, AA70S] = useImage(images[70]);
    const [AA71, AA71S] = useImage(images[71]);
    const [AA72, AA72S] = useImage(images[72]);
    const [AA73, AA73S] = useImage(images[73]);
    const [AA74, AA74S] = useImage(images[74]);
    const [AA75, AA75S] = useImage(images[75]);
    const [AA76, AA76S] = useImage(images[76]);
    const [AA77, AA77S] = useImage(images[77]);
    const [AA78, AA78S] = useImage(images[78]);
    const [AA79, AA79S] = useImage(images[79]);
    const [AA80, AA80S] = useImage(images[80]);
    const [AA81, AA81S] = useImage(images[81]);
    const [AA82, AA82S] = useImage(images[82]);
    const [AA83, AA83S] = useImage(images[83]);
    const [AA84, AA84S] = useImage(images[84]);
    const [AA85, AA85S] = useImage(images[85]);
    const [AA86, AA86S] = useImage(images[86]);
    const [AA87, AA87S] = useImage(images[87]);
    const [AA88, AA88S] = useImage(images[88]);
    const [AA89, AA89S] = useImage(images[89]);
    const [AA90, AA90S] = useImage(images[90]);
    const [AA91, AA91S] = useImage(images[91]);
    const [AA92, AA92S] = useImage(images[92]);
    const [AA93, AA93S] = useImage(images[93]);
    const [AA94, AA94S] = useImage(images[94]);
    const [AA95, AA95S] = useImage(images[95]);
    const [AA96, AA96S] = useImage(images[96]);
    const [AA97, AA97S] = useImage(images[97]);
    const [AA98, AA98S] = useImage(images[98]);
    const [AA99, AA99S] = useImage(images[99]);
    const [AA100, AA100S] = useImage(images[100]);
    const [AA101, AA101S] = useImage(images[101]);
    const [AA102, AA102S] = useImage(images[102]);
    const [AA103, AA103S] = useImage(images[103]);
    const [AA104, AA104S] = useImage(images[104]);
    const [AA105, AA105S] = useImage(images[105]);
    const [AA106, AA106S] = useImage(images[106]);
    const [AA107, AA107S] = useImage(images[107]);
    const [AA108, AA108S] = useImage(images[108]);
    const [AA109, AA109S] = useImage(images[109]);
    const [AA110, AA110S] = useImage(images[110]);
    const [AA111, AA111S] = useImage(images[111]);
    const [AA112, AA112S] = useImage(images[112]);
    const [AA113, AA113S] = useImage(images[113]);
    const [AA114, AA114S] = useImage(images[114]);
    const [AA115, AA115S] = useImage(images[115]);
    const [AA116, AA116S] = useImage(images[116]);
    const [AA117, AA117S] = useImage(images[117]);
    const [AA118, AA118S] = useImage(images[118]);
    const [AA119, AA119S] = useImage(images[119]);
    const [AA120, AA120S] = useImage(images[120]);
    const [AA121, AA121S] = useImage(images[121]);
    const [AA122, AA122S] = useImage(images[122]);
    const [AA123, AA123S] = useImage(images[123]);
    const [AA124, AA124S] = useImage(images[124]);
    const [AA125, AA125S] = useImage(images[125]);
    const [AA126, AA126S] = useImage(images[126]);
    const [AA127, AA127S] = useImage(images[127]);
    const [AA128, AA128S] = useImage(images[128]);
    const [AA129, AA129S] = useImage(images[129]);
    const [AA130, AA130S] = useImage(images[130]);
    const [AA131, AA131S] = useImage(images[131]);
    const [AA132, AA132S] = useImage(images[132]);
    const [AA133, AA133S] = useImage(images[133]);
    const [AA134, AA134S] = useImage(images[134]);
    const [AA135, AA135S] = useImage(images[135]);
    const [AA136, AA136S] = useImage(images[136]);
    const [AA137, AA137S] = useImage(images[137]);
    const [AA138, AA138S] = useImage(images[138]);
    const [AA139, AA139S] = useImage(images[139]);
    const [AA140, AA140S] = useImage(images[140]);
    const [AA141, AA141S] = useImage(images[141]);
    const [AA142, AA142S] = useImage(images[142]);
    const [AA143, AA143S] = useImage(images[143]);
    const [AA144, AA144S] = useImage(images[144]);
    const [AA145, AA145S] = useImage(images[145]);
    const [AA146, AA146S] = useImage(images[146]);
    const [AA147, AA147S] = useImage(images[147]);
    const [AA148, AA148S] = useImage(images[148]);
    const [AA149, AA149S] = useImage(images[149]);
    const [AA150, AA150S] = useImage(images[150]);
    const [AA151, AA151S] = useImage(images[151]);
    const [AA152, AA152S] = useImage(images[152]);
    const [AA153, AA153S] = useImage(images[153]);
    const [AA154, AA154S] = useImage(images[154]);
    const [AA155, AA155S] = useImage(images[155]);
    const [AA156, AA156S] = useImage(images[156]);
    const [AA157, AA157S] = useImage(images[157]);
    const [AA158, AA158S] = useImage(images[158]);
    const [AA159, AA159S] = useImage(images[159]);
    const [AA160, AA160S] = useImage(images[160]);
    const [AA161, AA161S] = useImage(images[161]);
    const [AA162, AA162S] = useImage(images[162]);
    const [AA163, AA163S] = useImage(images[163]);
    const [AA164, AA164S] = useImage(images[164]);
    const [AA165, AA165S] = useImage(images[165]);
    const [AA166, AA166S] = useImage(images[166]);
    const [AA167, AA167S] = useImage(images[167]);
    const [AA168, AA168S] = useImage(images[168]);
    const [AA169, AA169S] = useImage(images[169]);
    const [AA170, AA170S] = useImage(images[170]);
    const [AA171, AA171S] = useImage(images[171]);
    const [AA172, AA172S] = useImage(images[172]);
    const [AA173, AA173S] = useImage(images[173]);
    const [AA174, AA174S] = useImage(images[174]);
    const [AA175, AA175S] = useImage(images[175]);
    const [AA176, AA176S] = useImage(images[176]);
    const [AA177, AA177S] = useImage(images[177]);
    const [AA178, AA178S] = useImage(images[178]);
    const [AA179, AA179S] = useImage(images[179]);
    const [AA180, AA180S] = useImage(images[180]);
    const [AA181, AA181S] = useImage(images[181]);
    const [AA182, AA182S] = useImage(images[182]);
    const [AA183, AA183S] = useImage(images[183]);
    const [AA184, AA184S] = useImage(images[184]);
    const [AA185, AA185S] = useImage(images[185]);
    const [AA186, AA186S] = useImage(images[186]);
    const [AA187, AA187S] = useImage(images[187]);
    const [AA188, AA188S] = useImage(images[188]);
    const [AA189, AA189S] = useImage(images[189]);
    const [AA190, AA190S] = useImage(images[190]);
    const [AA191, AA191S] = useImage(images[191]);
    const [AA192, AA192S] = useImage(images[192]);
    const [AA193, AA193S] = useImage(images[193]);
    const [AA194, AA194S] = useImage(images[194]);
    const [AA195, AA195S] = useImage(images[195]);
    const [AA196, AA196S] = useImage(images[196]);
    const [AA197, AA197S] = useImage(images[197]);
    const [AA198, AA198S] = useImage(images[198]);
    const [AA199, AA199S] = useImage(images[199]);
    const [AA200, AA200S] = useImage(images[200]);
    const [AA201, AA201S] = useImage(images[201]);
    const [AA202, AA202S] = useImage(images[202]);
    const [AA203, AA203S] = useImage(images[203]);
    const [AA204, AA204S] = useImage(images[204]);
    const [AA205, AA205S] = useImage(images[205]);
    const [AA206, AA206S] = useImage(images[206]);
    const [AA207, AA207S] = useImage(images[207]);
    const [AA208, AA208S] = useImage(images[208]);
    const [AA209, AA209S] = useImage(images[209]);
    const [AA210, AA210S] = useImage(images[210]);
    const [AA211, AA211S] = useImage(images[211]);
    const [AA212, AA212S] = useImage(images[212]);
    const [AA213, AA213S] = useImage(images[213]);
    const [AA214, AA214S] = useImage(images[214]);
    const [AA215, AA215S] = useImage(images[215]);
    const [AA216, AA216S] = useImage(images[216]);
    const [AA217, AA217S] = useImage(images[217]);
    const [AA218, AA218S] = useImage(images[218]);
    const [AA219, AA219S] = useImage(images[219]);
    const [AA220, AA220S] = useImage(images[220]);
    const [AA221, AA221S] = useImage(images[221]);
    const [AA222, AA222S] = useImage(images[222]);
    const [AA223, AA223S] = useImage(images[223]);
    const [AA224, AA224S] = useImage(images[224]);
    const [AA225, AA225S] = useImage(images[225]);
    const [AA226, AA226S] = useImage(images[226]);
    const [AA227, AA227S] = useImage(images[227]);
    const [AA228, AA228S] = useImage(images[228]);
    const [AA229, AA229S] = useImage(images[229]);
    const [AA230, AA230S] = useImage(images[230]);
    const [AA231, AA231S] = useImage(images[231]);
    const [AA232, AA232S] = useImage(images[232]);
    const [AA233, AA233S] = useImage(images[233]);
    const [AA234, AA234S] = useImage(images[234]);
    const [AA235, AA235S] = useImage(images[235]);
    const [AA236, AA236S] = useImage(images[236]);
    const [AA237, AA237S] = useImage(images[237]);
    const [AA238, AA238S] = useImage(images[238]);
    const [AA239, AA239S] = useImage(images[239]);
    const [AA240, AA240S] = useImage(images[240]);
    const [AA241, AA241S] = useImage(images[241]);
    const [AA242, AA242S] = useImage(images[242]);

    const newImages = Array.of(
        [AA0, AA0S],
        [AA1, AA1S],
        [AA2, AA2S],
        [AA3, AA3S],
        [AA4, AA4S],
        [AA5, AA5S],
        [AA6, AA6S],
        [AA7, AA7S],
        [AA8, AA8S],
        [AA9, AA9S],
        [AA10, AA10S],
        [AA11, AA11S],
        [AA12, AA12S],
        [AA13, AA13S],
        [AA14, AA14S],
        [AA15, AA15S],
        [AA16, AA16S],
        [AA17, AA17S],
        [AA18, AA18S],
        [AA19, AA19S],
        [AA20, AA20S],
        [AA21, AA21S],
        [AA22, AA22S],
        [AA23, AA23S],
        [AA24, AA24S],
        [AA25, AA25S],
        [AA26, AA26S],
        [AA27, AA27S],
        [AA28, AA28S],
        [AA29, AA29S],

        [AA30, AA30S],
        [AA31, AA31S],
        [AA32, AA32S],
        [AA33, AA33S],
        [AA34, AA34S],
        [AA35, AA35S],
        [AA36, AA36S],
        [AA37, AA37S],
        [AA38, AA38S],
        [AA39, AA39S],

        [AA40, AA40S],
        [AA41, AA41S],
        [AA42, AA42S],
        [AA43, AA43S],
        [AA44, AA44S],
        [AA45, AA45S],
        [AA46, AA46S],
        [AA47, AA47S],
        [AA48, AA48S],
        [AA49, AA49S],

        [AA50, AA50S],
        [AA51, AA51S],
        [AA52, AA52S],
        [AA53, AA53S],
        [AA54, AA54S],
        [AA55, AA55S],
        [AA56, AA56S],
        [AA57, AA57S],
        [AA58, AA58S],
        [AA59, AA59S],

        [AA60, AA60S],
        [AA61, AA61S],
        [AA62, AA62S],
        [AA63, AA63S],
        [AA64, AA64S],
        [AA65, AA65S],
        [AA66, AA66S],
        [AA67, AA67S],
        [AA68, AA68S],
        [AA69, AA69S],

        [AA70, AA70S],
        [AA71, AA71S],
        [AA72, AA72S],
        [AA73, AA73S],
        [AA74, AA74S],
        [AA75, AA75S],
        [AA76, AA76S],
        [AA77, AA77S],
        [AA78, AA78S],
        [AA79, AA79S],

        [AA80, AA80S],
        [AA81, AA81S],
        [AA82, AA82S],
        [AA83, AA83S],
        [AA84, AA84S],
        [AA85, AA85S],
        [AA86, AA86S],
        [AA87, AA87S],
        [AA88, AA88S],
        [AA89, AA89S],

        [AA90, AA90S],
        [AA91, AA91S],
        [AA92, AA92S],
        [AA93, AA93S],
        [AA94, AA94S],
        [AA95, AA95S],
        [AA96, AA96S],
        [AA97, AA97S],
        [AA98, AA98S],
        [AA99, AA99S],

        [AA100, AA100S],
        [AA101, AA101S],
        [AA102, AA102S],
        [AA103, AA103S],
        [AA104, AA104S],
        [AA105, AA105S],
        [AA106, AA106S],
        [AA107, AA107S],
        [AA108, AA108S],
        [AA109, AA109S],

        [AA110, AA110S],
        [AA111, AA111S],
        [AA112, AA112S],
        [AA113, AA113S],
        [AA114, AA114S],
        [AA115, AA115S],
        [AA116, AA116S],
        [AA117, AA117S],
        [AA118, AA118S],
        [AA119, AA119S],

        [AA120, AA120S],
        [AA121, AA121S],
        [AA122, AA122S],
        [AA123, AA123S],
        [AA124, AA124S],
        [AA125, AA125S],
        [AA126, AA126S],
        [AA127, AA127S],
        [AA128, AA128S],
        [AA129, AA129S],

        [AA130, AA130S],
        [AA131, AA131S],
        [AA132, AA132S],
        [AA133, AA133S],
        [AA134, AA134S],
        [AA135, AA135S],
        [AA136, AA136S],
        [AA137, AA137S],
        [AA138, AA138S],
        [AA139, AA139S],

        [AA140, AA140S],
        [AA141, AA141S],
        [AA142, AA142S],
        [AA143, AA143S],
        [AA144, AA144S],
        [AA145, AA145S],
        [AA146, AA146S],
        [AA147, AA147S],
        [AA148, AA148S],
        [AA149, AA149S],

        [AA150, AA150S],
        [AA151, AA151S],
        [AA152, AA152S],
        [AA153, AA153S],
        [AA154, AA154S],
        [AA155, AA155S],
        [AA156, AA156S],
        [AA157, AA157S],
        [AA158, AA158S],
        [AA159, AA159S],

        [AA160, AA160S],
        [AA161, AA161S],
        [AA162, AA162S],
        [AA163, AA163S],
        [AA164, AA164S],
        [AA165, AA165S],
        [AA166, AA166S],
        [AA167, AA167S],
        [AA168, AA168S],
        [AA169, AA169S],

        [AA170, AA170S],
        [AA171, AA171S],
        [AA172, AA172S],
        [AA173, AA173S],
        [AA174, AA174S],
        [AA175, AA175S],
        [AA176, AA176S],
        [AA177, AA177S],
        [AA178, AA178S],
        [AA179, AA179S],
        [AA180, AA180S],
        [AA181, AA181S],
        [AA182, AA182S],
        [AA183, AA183S],
        [AA184, AA184S],
        [AA185, AA185S],
        [AA186, AA186S],
        [AA187, AA187S],
        [AA188, AA188S],
        [AA189, AA189S],
        [AA190, AA190S],
        [AA191, AA191S],
        [AA192, AA192S],
        [AA193, AA193S],
        [AA194, AA194S],
        [AA195, AA195S],
        [AA196, AA196S],
        [AA197, AA197S],
        [AA198, AA198S],
        [AA199, AA199S],
        [AA200, AA200S],
        [AA201, AA201S],
        [AA202, AA202S],
        [AA203, AA203S],
        [AA204, AA204S],
        [AA205, AA205S],
        [AA206, AA206S],
        [AA207, AA207S],
        [AA208, AA208S],
        [AA209, AA209S],
        [AA210, AA210S],
        [AA211, AA211S],
        [AA212, AA212S],
        [AA213, AA213S],
        [AA214, AA214S],
        [AA215, AA215S],
        [AA216, AA216S],
        [AA217, AA217S],
        [AA218, AA218S],
        [AA219, AA219S],
        [AA220, AA220S],
        [AA221, AA221S],
        [AA222, AA222S],
        [AA223, AA223S],
        [AA224, AA224S],
        [AA225, AA225S],
        [AA226, AA226S],
        [AA227, AA227S],
        [AA228, AA228S],
        [AA229, AA229S],
        [AA230, AA230S],
        [AA231, AA231S],
        [AA232, AA232S],
        [AA233, AA233S],
        [AA234, AA234S],
        [AA235, AA235S],
        [AA236, AA236S],
        [AA237, AA237S],
        [AA238, AA238S],
        [AA239, AA239S],
        [AA240, AA240S],
        [AA241, AA241S],
        [AA242, AA242S]
    );
    return newImages;
};

export default FramesArray;
