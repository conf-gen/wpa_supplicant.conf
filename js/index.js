/* require */
require('mofron');
const AppBase=require("mofron-comp-appbase");
const Heading=require("mofron-comp-heading");
const DropDown=require("mofron-comp-dropdown");
const Input=require("mofron-comp-input");
const Frame=require("mofron-comp-frame");
const Button=require("mofron-comp-button");
const Text=require("mofron-comp-text");
const Code=require("mofron-comp-code");
const Footer=require("mofron-comp-footer");
const Fade=require("mofron-effect-fade");
const HrzPos=require("mofron-effect-hrzpos");
const Margin=require("mofron-layout-margin");
const Grid=require("mofron-layout-grid");
const HrzCent=require("mofron-layout-hrzcenter");
const comutl=mofron.util.common;
const cmputl=mofron.util.component;
try {

    /* script (extern) */

    /* script (init) */
    let generate= () => {
        let country = (0 === fm_country.value()) ? "" : "country=" + country_prefix[fm_country.value()-1];
        let ssid    = 'ssid="' + fm_ssid.value() + '"';
        let pass    = 'psk="' + fm_pass.value() + '"';
        let auth    = fm_auth.value();
        let encry   = fm_encry.value();
        
        let gen_ret = "";
        gen_ret += "ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\n";
        gen_ret += "update_config=1\n";
        
        gen_ret += country + "\n";
        gen_ret += "network={" + "\n";
        gen_ret += "\t" + ssid + "\n";
        
        gen_ret += (0 === auth) ? "\tproto=RSN\n" : "\tproto=WPA\n";
        gen_ret += "\tkey_mgmt=WPA-PSK\n";
        
        gen_ret += (0 === encry) ? "\tpairwise=TKIP\n" : "\tpairwise=CCMP\n";
        gen_ret += (0 === encry) ? "\tgroup=TKIP\n" : "\tgroup=CCMP\n";
        
        gen_ret += "\t" + pass + "\n";
        gen_ret += "}\n";
         
        retcode.text(gen_ret);
    }

    /* template */

    /* component */
    let cmp0_0=new Heading("wpa_supplicant.conf");
    let fm_country=new DropDown("Select Country");
    let fm_ssid=new Input();
    let fm_pass=new Input();
    let fm_auth=new DropDown(["WPA2-PSK","WPA-PSK"]);
    let fm_encry=new DropDown(["TKIP","AES"]);
    let gen_btn=new Button();
    let cmp0_1_0=new mofron.class.Component();
    let cmp0_1_1_0=new Text("result:");
    let retcode=new Code();
    let result=new Frame();
    let cmp0_1_1=new mofron.class.Component();
    let cmp0_1=new mofron.class.Component();
    let cmp0_2=new Footer();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    cmp0_1_0.child([fm_country,fm_ssid,fm_pass,fm_auth,fm_encry,gen_btn]);
    result.child([retcode]);
    cmp0_1_1.child([cmp0_1_1_0,result]);
    cmp0_1.child([cmp0_1_0,cmp0_1_1]);
    cmp0.child([cmp0_0,cmp0_1,cmp0_2]);
    root_cmp.child([cmp0]);
    cmp0_0.config({style:{'padding':"0.5rem"}});
    fm_country.config({name:"fm_country",label:"country",height:"0.35rem"});
    fm_ssid.config({name:"fm_ssid",label:"ssid"});
    fm_pass.config({name:"fm_pass",type:"password",label:"passphrase"});
    fm_auth.config({name:"fm_auth",label:"authentication",height:"0.35rem"});
    fm_encry.config({name:"fm_encry",label:"encryption",height:"0.35rem"});
    let eff1=new HrzPos("center");
    gen_btn.config({name:"gen_btn",clickEvent:generate,effect:eff1,size:new mofron.class.ConfArg("2.5rem","0.5rem"),text:"Generate"});
    let lot2=new Margin("top","0.3rem");
    let lot3=new Margin("left","0.7rem");
    cmp0_1_0.config({layout:[lot2,lot3],theme:{FormItem:{config:{width:"3rem"}}}});
    cmp0_1_1_0.config({size:"0.3rem"});
    retcode.config({name:"retcode",style:new mofron.class.ConfArg({'font-family':"monospace"},{lock:true})});
    result.config({name:"result",size:new mofron.class.ConfArg("90%",null)});
    cmp0_1.config({layout:new Grid([50,50])});
    cmp0_2.config({color:'#ccd1f5',style:{'margin-top':"0.3rem"},height:"0.5rem"});
    cmp0.config({color:'#ccd1f5',baseColor:'#fafafa',title:new mofron.class.ConfArg("CONF-GEN","./img/icon_b.png")});
    let eff4=new Fade(true,1000);
    root_cmp.config({effect:eff4,theme:{Text:{config:{color:'#787878',font:"'Major Mono Display'"}}}});

    /* script (before) */
    let country_list=["Andorra","United Arab Emirates","Afghanistan","Antigua & Barbuda","Anguilla","Albania","Armenia","Angola","Antarctica","ArgentinaAS Samoa (American)","Austria","Australia","Aruba","Åland Islands","Azerbaijan","Bosnia & Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","St Barthelemy","Bermuda","Brunei","Bolivia","Caribbean NL","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos (Keeling) Islands","Congo (Dem. Rep.)","Central African Rep.","Congo (Rep.)","Switzerland","Côte d'Ivoire","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curaçao","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","Britain (UK)","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia & the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island & McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","St Kitts & Nevis","Korea (North)","Korea (South)","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","St Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","St Martin (French)","Madagascar","Marshall Islands","North Macedonia","Mali","Myanmar (Burma)","Mongolia","Macau","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","St Pierre & Miquelon","Pitcairn","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Réunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","St Helena","Slovenia","Svalbard & Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","Sao Tome & Principe","El Salvador","St Maarten (Dutch)","Syria","Eswatini (Swaziland)","Turks & Caicos Is","Chad","French Southern & Antarctic Lands","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad & Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","US minor outlying islands","United States","Uruguay","Uzbekistan","Vatican City","St Vincent","Venezuela","Virgin Islands (UK)","Virgin Islands (US)","Vietnam","Vanuatu","Wallis & Futuna","Samoa (western)","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"],country_prefix=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];fm_country.text(country_list);

    /* start visible */
    root_cmp.visible(true,() => {try{

        /* script (after) */

    }catch(e){console.error(e.stack);}});
} catch (e) {
    console.error(e.stack);
}
