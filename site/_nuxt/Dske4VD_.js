import{e as Pt,c as O,a as $,F as ce,r as he,t as K,o as D,n as Ce,j as m,_ as Tt,f as B,u as $i,l as Pi,q as j,z as In,H as gt,E as _n,s as de,m as vt,h as Ti,P as Xe,k as Ve,b as H,d as Re,Z as Ei,a1 as Ri,a9 as Di,U as mt,i as Oi,dw as Ai}from"#entry";import{d as Vi,e as Ni,u as Li,f as yt,g as zi,h as Bi}from"./ehuLAUb2.js";import{u as Ui}from"./DqKMTC_q.js";import"./BIpM7Y0L.js";const Wi={class:"explosion","aria-hidden":"true"},Gi={class:"explosion-caption"},Xi=Pt({__name:"WiringExplosion",props:{points:{},title:{},advice:{}},setup(i){const d=Array.from({length:20},(p,l)=>({"--angle":`${l*137.508}deg`,"--distance":`${23+l*7%34}vmax`,"--spark-duration":`${570+l*37%620}ms`,"--spark-length":`${16+l*19%48}px`}));return(p,l)=>(D(),O("div",Wi,[l[3]||(l[3]=$("div",{class:"explosion-flash"},null,-1)),(D(!0),O(ce,null,he(i.points,f=>(D(),O("div",{key:f.id,class:"explosion-origin",style:Ce({left:f.x+"px",top:f.y+"px"})},[l[0]||(l[0]=$("div",{class:"explosion-wave"},null,-1)),l[1]||(l[1]=$("div",{class:"explosion-wave second"},null,-1)),l[2]||(l[2]=$("div",{class:"explosion-core"},null,-1)),(D(!0),O(ce,null,he(m(d),(v,c)=>(D(),O("span",{key:c,class:"explosion-spark",style:Ce(v)},null,4))),128))],4))),128)),$("div",Gi,[$("strong",null,K(i.title),1),$("span",null,K(i.advice),1)])]))}}),ji=Object.assign(Tt(Xi,[["__scopeId","data-v-04ccea24"]]),{__name:"WiringExplosion"}),Fi=`{
  "format": "hs-fpv-wiring",
  "version": 1,
  "devices": [
    {
      "id": "d1",
      "kind": "fc",
      "x": 96,
      "y": 62
    },
    {
      "id": "d2",
      "kind": "elrs",
      "x": 475.5913915046618,
      "y": 23.467091762814476
    },
    {
      "id": "d7",
      "kind": "esc",
      "x": 87.6306453950589,
      "y": -253.69849594055808,
      "rotation": 180
    },
    {
      "id": "d16",
      "kind": "power-lead",
      "x": 150.19558512770388,
      "y": -396.54449758948044,
      "rotation": 90
    },
    {
      "id": "d20",
      "kind": "battery-6s",
      "x": 107.19558512770388,
      "y": -624.5444975894804,
      "rotation": 90
    },
    {
      "id": "d22",
      "kind": "elrs-antenna",
      "x": 731.9769163182084,
      "y": 75.92543907818195,
      "rotation": 90
    },
    {
      "id": "d24",
      "kind": "motor",
      "x": -202.8446749361303,
      "y": -284.68845774419367
    },
    {
      "id": "d25",
      "kind": "motor",
      "x": -208.24365696895666,
      "y": -157.283068008771
    },
    {
      "id": "d26",
      "kind": "motor",
      "x": 490.86276321959315,
      "y": -282.52710055784974,
      "mirrored": true
    },
    {
      "id": "d27",
      "kind": "motor",
      "x": 501.7180694146796,
      "y": -152.6692320558818,
      "rotation": 0,
      "mirrored": true
    },
    {
      "id": "d41",
      "kind": "gps",
      "x": 463.7643671989266,
      "y": 161.18621614633398,
      "rotation": 90
    },
    {
      "id": "d48",
      "kind": "capacitor",
      "x": 257.0148784278072,
      "y": -380.04162866127336,
      "rotation": 180
    },
    {
      "id": "d52",
      "kind": "analog-vtx",
      "x": 366.0400905665453,
      "y": 539.1902570964037
    },
    {
      "id": "d58",
      "kind": "vtx-antenna",
      "x": 183.27721558216223,
      "y": 610.6210627651632,
      "rotation": 270
    },
    {
      "id": "d60",
      "kind": "analog-camera",
      "x": -229.0280739942619,
      "y": 68.58094350683115
    },
    {
      "id": "d64",
      "kind": "led",
      "x": 98.80421778246955,
      "y": 479.1580990684732,
      "rotation": 90
    },
    {
      "id": "d68",
      "kind": "buzzer",
      "x": 31.77282023501708,
      "y": 422.002390060531,
      "rotation": 90
    }
  ],
  "wires": [
    {
      "id": "d3",
      "a": {
        "device": "d2",
        "pad": "rx"
      },
      "b": {
        "device": "d1",
        "pad": "t4"
      }
    },
    {
      "id": "d4",
      "a": {
        "device": "d2",
        "pad": "tx"
      },
      "b": {
        "device": "d1",
        "pad": "r4"
      }
    },
    {
      "id": "d5",
      "a": {
        "device": "d2",
        "pad": "5v"
      },
      "b": {
        "device": "d1",
        "pad": "5v"
      }
    },
    {
      "id": "d6",
      "a": {
        "device": "d2",
        "pad": "gnd"
      },
      "b": {
        "device": "d1",
        "pad": "gnd"
      }
    },
    {
      "id": "d8",
      "a": {
        "device": "d7",
        "pad": "cur"
      },
      "b": {
        "device": "d1",
        "pad": "cur"
      }
    },
    {
      "id": "d10",
      "a": {
        "device": "d7",
        "pad": "m4"
      },
      "b": {
        "device": "d1",
        "pad": "m4"
      }
    },
    {
      "id": "d11",
      "a": {
        "device": "d7",
        "pad": "m3"
      },
      "b": {
        "device": "d1",
        "pad": "m3"
      }
    },
    {
      "id": "d12",
      "a": {
        "device": "d7",
        "pad": "m2"
      },
      "b": {
        "device": "d1",
        "pad": "m2"
      }
    },
    {
      "id": "d13",
      "a": {
        "device": "d7",
        "pad": "m1"
      },
      "b": {
        "device": "d1",
        "pad": "m1"
      }
    },
    {
      "id": "d14",
      "a": {
        "device": "d7",
        "pad": "bat"
      },
      "b": {
        "device": "d1",
        "pad": "bat-top"
      }
    },
    {
      "id": "d15",
      "a": {
        "device": "d7",
        "pad": "gnd"
      },
      "b": {
        "device": "d1",
        "pad": "gnd-top-left"
      }
    },
    {
      "id": "d18",
      "a": {
        "device": "d16",
        "pad": "minus"
      },
      "b": {
        "device": "d7",
        "pad": "battery-minus"
      }
    },
    {
      "id": "d21",
      "a": {
        "device": "d20",
        "pad": "xt60"
      },
      "b": {
        "device": "d16",
        "pad": "xt60"
      }
    },
    {
      "id": "d23",
      "a": {
        "device": "d22",
        "pad": "ipex"
      },
      "b": {
        "device": "d2",
        "pad": "ipex"
      }
    },
    {
      "id": "d28",
      "a": {
        "device": "d27",
        "pad": "phase-a"
      },
      "b": {
        "device": "d7",
        "pad": "phase-2-c"
      }
    },
    {
      "id": "d29",
      "a": {
        "device": "d27",
        "pad": "phase-b"
      },
      "b": {
        "device": "d7",
        "pad": "phase-2-b"
      }
    },
    {
      "id": "d30",
      "a": {
        "device": "d27",
        "pad": "phase-c"
      },
      "b": {
        "device": "d7",
        "pad": "phase-2-a"
      }
    },
    {
      "id": "d31",
      "a": {
        "device": "d26",
        "pad": "phase-a"
      },
      "b": {
        "device": "d7",
        "pad": "phase-1-c"
      }
    },
    {
      "id": "d32",
      "a": {
        "device": "d26",
        "pad": "phase-b"
      },
      "b": {
        "device": "d7",
        "pad": "phase-1-b"
      }
    },
    {
      "id": "d33",
      "a": {
        "device": "d26",
        "pad": "phase-c"
      },
      "b": {
        "device": "d7",
        "pad": "phase-1-a"
      }
    },
    {
      "id": "d34",
      "a": {
        "device": "d24",
        "pad": "phase-a"
      },
      "b": {
        "device": "d7",
        "pad": "phase-3-c"
      }
    },
    {
      "id": "d35",
      "a": {
        "device": "d24",
        "pad": "phase-b"
      },
      "b": {
        "device": "d7",
        "pad": "phase-3-b"
      }
    },
    {
      "id": "d36",
      "a": {
        "device": "d24",
        "pad": "phase-c"
      },
      "b": {
        "device": "d7",
        "pad": "phase-3-a"
      }
    },
    {
      "id": "d37",
      "a": {
        "device": "d25",
        "pad": "phase-a"
      },
      "b": {
        "device": "d7",
        "pad": "phase-4-c"
      }
    },
    {
      "id": "d38",
      "a": {
        "device": "d25",
        "pad": "phase-b"
      },
      "b": {
        "device": "d7",
        "pad": "phase-4-b"
      }
    },
    {
      "id": "d39",
      "a": {
        "device": "d25",
        "pad": "phase-c"
      },
      "b": {
        "device": "d7",
        "pad": "phase-4-a"
      }
    },
    {
      "id": "d42",
      "a": {
        "device": "d41",
        "pad": "tx"
      },
      "b": {
        "device": "d1",
        "pad": "r5"
      }
    },
    {
      "id": "d43",
      "a": {
        "device": "d41",
        "pad": "rx"
      },
      "b": {
        "device": "d1",
        "pad": "t5"
      }
    },
    {
      "id": "d44",
      "a": {
        "device": "d41",
        "pad": "gnd"
      },
      "b": {
        "device": "d1",
        "pad": "gnd-right-lower"
      }
    },
    {
      "id": "d45",
      "a": {
        "device": "d41",
        "pad": "5v"
      },
      "b": {
        "device": "d1",
        "pad": "4v5-right"
      }
    },
    {
      "id": "d46",
      "a": {
        "device": "d41",
        "pad": "scl"
      },
      "b": {
        "device": "d1",
        "pad": "scl"
      }
    },
    {
      "id": "d47",
      "a": {
        "device": "d41",
        "pad": "sda"
      },
      "b": {
        "device": "d1",
        "pad": "sda"
      }
    },
    {
      "id": "d49",
      "a": {
        "device": "d16",
        "pad": "plus"
      },
      "b": {
        "device": "d7",
        "pad": "battery-plus"
      }
    },
    {
      "id": "d50",
      "a": {
        "device": "d48",
        "pad": "minus"
      },
      "b": {
        "device": "d7",
        "pad": "battery-minus"
      }
    },
    {
      "id": "d51",
      "a": {
        "device": "d48",
        "pad": "plus"
      },
      "b": {
        "device": "d7",
        "pad": "battery-plus"
      }
    },
    {
      "id": "d53",
      "a": {
        "device": "d52",
        "pad": "irc"
      },
      "b": {
        "device": "d1",
        "pad": "t1"
      }
    },
    {
      "id": "d54",
      "a": {
        "device": "d52",
        "pad": "vin"
      },
      "b": {
        "device": "d1",
        "pad": "vcc"
      }
    },
    {
      "id": "d55",
      "a": {
        "device": "d52",
        "pad": "gnd-in"
      },
      "b": {
        "device": "d1",
        "pad": "gnd-bottom-right"
      }
    },
    {
      "id": "d56",
      "a": {
        "device": "d52",
        "pad": "video"
      },
      "b": {
        "device": "d1",
        "pad": "vtx"
      }
    },
    {
      "id": "d57",
      "a": {
        "device": "d1",
        "pad": "9v-inner"
      },
      "b": {
        "device": "d1",
        "pad": "inner-center"
      }
    },
    {
      "id": "d59",
      "a": {
        "device": "d58",
        "pad": "ipex"
      },
      "b": {
        "device": "d52",
        "pad": "ipex"
      }
    },
    {
      "id": "d61",
      "a": {
        "device": "d60",
        "pad": "5v"
      },
      "b": {
        "device": "d1",
        "pad": "5v-inner-top"
      }
    },
    {
      "id": "d62",
      "a": {
        "device": "d60",
        "pad": "gnd"
      },
      "b": {
        "device": "d1",
        "pad": "gnd-inner-top"
      }
    },
    {
      "id": "d63",
      "a": {
        "device": "d60",
        "pad": "video"
      },
      "b": {
        "device": "d1",
        "pad": "c1"
      }
    },
    {
      "id": "d65",
      "a": {
        "device": "d64",
        "pad": "5v"
      },
      "b": {
        "device": "d1",
        "pad": "5v-bottom-left"
      }
    },
    {
      "id": "d66",
      "a": {
        "device": "d64",
        "pad": "din"
      },
      "b": {
        "device": "d1",
        "pad": "led"
      }
    },
    {
      "id": "d67",
      "a": {
        "device": "d64",
        "pad": "gnd"
      },
      "b": {
        "device": "d1",
        "pad": "gnd-bottom-left"
      }
    },
    {
      "id": "d69",
      "a": {
        "device": "d68",
        "pad": "plus"
      },
      "b": {
        "device": "d1",
        "pad": "b-plus"
      }
    },
    {
      "id": "d70",
      "a": {
        "device": "d68",
        "pad": "minus"
      },
      "b": {
        "device": "d1",
        "pad": "b-minus"
      }
    }
  ]
}
`,Ji=[{id:"cur",label:"CUR",kind:"esc-current",x:158,y:43,side:"up"},{id:"m4",label:"M4",kind:"motor-signal",x:192,y:43,side:"up"},{id:"m3",label:"M3",kind:"motor-signal",x:226,y:43,side:"up"},{id:"m2",label:"M2",kind:"motor-signal",x:260,y:43,side:"up"},{id:"m1",label:"M1",kind:"motor-signal",x:294,y:43,side:"up"},{id:"bat",label:"BAT",kind:"power",voltage:"battery",powerDirection:"out",x:328,y:43,side:"up"},{id:"gnd",label:"GND",kind:"ground",x:362,y:43,side:"up"}],qi=[{motor:2,x:27,top:99,side:"left"},{motor:1,x:27,top:256,side:"left"},{motor:4,x:493,top:99,side:"right"},{motor:3,x:493,top:256,side:"right"}],Hi=qi.flatMap(({motor:i,x:d,top:p,side:l})=>["a","b","c"].map((f,v)=>({id:`phase-${i}-${f}`,label:`M${i} ${f.toUpperCase()}`,kind:"motor-phase",motorChannel:i,x:d,y:p+v*47,side:l}))),Et=[...Ji,...Hi,{id:"battery-plus",label:"BAT+",kind:"power",voltage:"battery",powerDirection:"in",x:205,y:439,side:"down"},{id:"battery-minus",label:"BAT−",kind:"ground",x:315,y:439,side:"down"}];function _e(i,d,p,l){return p.map(([f,v,c,a,r="other",g])=>({id:f,label:v,x:c,y:a,kind:r,voltage:g,area:i,side:d,hitWidth:l,powerDirection:r==="power"&&typeof g=="number"?"out":void 0,uart:r==="tx"||r==="rx"?f.slice(1):void 0}))}const Rt=[..._e("上排","up",[["bat-top","BAT",131,49,"power","battery"],["gnd-top-left","G",159,49,"ground"],["cur","CUR",187,49,"esc-current"],["m1","M1",215,49,"motor-signal"],["m2","M2",243,49,"motor-signal"],["m3","M3",271,49,"motor-signal"],["m4","M4",299,49,"motor-signal"],["s1","S1",327,49],["s2","S2",355,49],["s3","S3",383,49],["gnd-top-right","G",410,49,"ground"],["5v-top","5V",437,49,"power",5]]),..._e("上方内排","up",[["c2","CAM2",325,94,"video-in"],["c1","CAM1",353,94,"video-in"],["gnd-inner-top","G",381,94,"ground"],["5v-inner-top","5V",409,94,"power",5],["9v-top","9V",437,94,"power",9]]),..._e("右侧","right",[["5v","5V",523,134,"power",5],["gnd","GND",523,167,"ground"],["r4","R4",522,200,"rx"],["t4","T4",522,235,"tx"],["4v5-right","5V",523,268,"power",5],["gnd-right-lower","GND",523,302,"ground"],["r5","R5",522,336,"rx"],["t5","T5",522,370,"tx"],["sda","SDA",523,404,"sda"],["scl","SCL",523,437,"scl"]]),..._e("左侧","left",[["rs","RS",40.5,135],["gnd-left-upper","G",40.5,168,"ground"],["4v5-left","5V",40.5,201,"power",5],["5v-left","5V",40,246,"power",5],["r3","R3",40,273.5,"rx"],["t3","T3",40,300,"tx"],["gnd-left-lower","G",40,327,"ground"],["3v3","3V3",37,386,"power",3.3],["boot","BOOT",37,446]]),..._e("左侧内排","left",[["t2","T2",79,135,"tx"],["r2","R2",79,168,"rx"]]),..._e("下排","down",[["b-minus","B−",129,523,"buzzer-minus"],["b-plus","B+",160,523,"buzzer-plus"],["led","LED",191,523,"led-out"],["gnd-bottom-left","G",221,523,"ground"],["5v-bottom-left","5V",252,523,"power",5],["vtx","VTX",282,523,"video-out"],["r1","R1",313,523,"rx"],["t1","T1",343,523,"tx"],["gnd-bottom-right","G",374,523,"ground"],["5v-bottom-right","5V",405,523,"power",5],["vcc","VCC",436,523,"power"]]),..._e("板内","down",[["gnd-sbus","GND",343,472,"ground"],["sbus","SBUS",378,472,"sbus-in"]]),..._e("板内","down",[["bat-inner","BAT",412,431,"power","battery"],["inner-center","VCC 选压中间",425,431,"power"],["9v-inner","9V",438,431,"power",9]],6.5)],Me={width:900,height:454},Rn=286,Mn=Rn/520,nn=.15,se=1.15;function Ne(i,d,p="left"){return{x:(918-d)*nn,y:i*nn,side:p}}const ee={fc:{width:Rn,height:291,illustration:"/images/wiring/f722.svg",indicators:[{id:"bat",label:"BAT",x:46,y:195,width:5.5,height:3.5,color:"#ff735c"},{id:"5v",label:"5V",x:46,y:201.5,width:5.5,height:3.5,color:"#7af59b"},{id:"3v3",label:"3.3V",x:46,y:208,width:5.5,height:3.5,color:"#7fdaff"},{id:"mcu",label:"MCU",x:46,y:214.5,width:5.5,height:3.5,color:"#aeacff"}],pads:Object.fromEntries(Rt.map(({id:i,x:d,y:p,side:l,hitWidth:f})=>[i,{x:d/2,y:p/2,side:l,hitWidth:f}]))},esc:{width:Rn,height:490*Mn,illustration:"/images/wiring/esc-4-in-1.svg",pads:Object.fromEntries(Et.map(({id:i,x:d,y:p,side:l})=>[i,{x:d*Mn,y:p*Mn,side:l}]))},"battery-6s":{width:260,height:129,illustration:"/images/wiring/battery-6s.svg",pads:{xt60:{x:254,y:66,side:"right"}}},"power-lead":{width:170,height:77,illustration:"/images/wiring/xt60-power-lead.svg",pads:{xt60:{x:7,y:38,side:"left"},plus:{x:161,y:20,side:"right"},minus:{x:161,y:57,side:"right"}}},capacitor:{width:70,height:112.5,illustration:"/images/wiring/capacitor.svg",pads:{plus:{x:21,y:7,side:"up"},minus:{x:47,y:21,side:"up"}}},motor:{width:180,height:148,illustration:"/images/wiring/motor-2207.svg",pads:{"phase-a":{x:171,y:102,side:"right"},"phase-b":{x:171,y:119,side:"right"},"phase-c":{x:171,y:136,side:"right"}}},elrs:{width:918*nn,height:734*nn,illustration:"/images/wiring/elrs-receiver.svg",indicators:[{id:"power",label:"电源",...Ne(580,591),width:2.7,height:4.2,color:"#6bfa92"}],pads:{rx:Ne(240,840),tx:Ne(349,838),"5v":Ne(458,837),gnd:Ne(569,834),ipex:Ne(543,188,"right")}},gps:{width:220,height:220,illustration:"/images/wiring/gps.svg",pads:{tx:{x:62.5,y:208.5,side:"down"},rx:{x:82.5,y:208.5,side:"down"},gnd:{x:102.5,y:208.5,side:"down"},"5v":{x:122.5,y:208.5,side:"down"},scl:{x:142.5,y:208.5,side:"down"},sda:{x:162.5,y:208.5,side:"down"}}},buzzer:{width:182,height:105,illustration:"/images/wiring/active-buzzer.svg",pads:{plus:{x:8.4,y:37.8,side:"left"},minus:{x:8.4,y:67.2,side:"left"}}},led:{width:220,height:52,illustration:"/images/wiring/led-strip.svg",indicators:["#ff546b","#ffd859","#63ff9e","#58c6ff"].map((i,d)=>({id:"strip",label:`${d+1} 号`,x:55+d*44,y:26,width:20,height:20,color:i})),pads:{"5v":{x:9.5,y:11.5,side:"left"},din:{x:9.5,y:26,side:"left"},gnd:{x:9.5,y:40.5,side:"left"}}},"analog-camera":{width:180,height:118,illustration:"/images/wiring/analog-camera.svg",pads:{"5v":{x:162,y:27,side:"right"},gnd:{x:162,y:59,side:"right"},video:{x:162,y:91,side:"right"}}},"analog-vtx":{width:180,height:180,illustration:"/images/wiring/analog-vtx.svg",indicators:[{id:"power",label:"电源",x:137.5,y:148,width:5.5,height:3.5,color:"#ffc26a"}],pads:{"5v-out":{x:32.5,y:16,side:"up"},gnd:{x:55.5,y:16,side:"up"},video:{x:78.5,y:16,side:"up"},"gnd-in":{x:101.5,y:16,side:"up"},vin:{x:124.5,y:16,side:"up"},irc:{x:147.5,y:16,side:"up"},ipex:{x:32,y:81,side:"left",hitWidth:20}}},"dji-o4-pro":{width:210,height:170,illustration:"/images/wiring/dji-o4-pro.svg",indicators:[{id:"power",label:"电源",x:148,y:110,width:4,height:4,color:"#76f4a1"}],pads:{vcc:{x:9,y:37.5,side:"left"},gnd:{x:9,y:56.5,side:"left"},rx:{x:9,y:75.5,side:"left"},tx:{x:9,y:94.5,side:"left"},"signal-gnd":{x:9,y:113.5,side:"left"},sbus:{x:9,y:132.5,side:"left"},"ipex-1":{x:198,y:49,side:"right"},"ipex-2":{x:198,y:121,side:"right"}}},"elrs-antenna":{width:136*se,height:22*se,illustration:"/images/wiring/elrs-antenna.svg",antennaLead:{x:68*se,y:19*se,side:"down"},pads:{ipex:{x:68*se,y:103*se,side:"up"}}},"vtx-antenna":{width:26*se,height:66*se,illustration:"/images/wiring/vtx-antenna.svg",antennaLead:{x:14*se,y:63*se,side:"down"},pads:{ipex:{x:14*se,y:146*se,side:"up"}}}},$n=[0,90,180,270],Pn=["up","right","down","left"],Ki={up:"up",right:"left",down:"down",left:"right"};function Yi(i=0,d=!1){const p=d?$n.length-1:1;return $n[(i/90+p)%$n.length]}function Zi(i){const{illustration:d,antennaLead:p}=ee[i.kind];if(!i.mirrored||p)return d;const l=i.kind==="elrs"?90:0,f=((i.rotation??0)+l)%180!==0;return`${d}#silkscreen-${f?"y":"x"}`}function $e(i){const d=ee[i.kind],p=i.rotation===90||i.rotation===270,l=p?d.height:d.width,f=p?d.width:d.height;return{x:i.x+(d.width-l)/2,y:i.y+(d.height-f)/2,width:l,height:f}}function Tn(i,d){return Dt(i,ee[i.kind].pads[d])}function Qi(i){const d=ee[i.kind].antennaLead;return d&&Dt(i,d)}function Dt(i,d){const{width:p,height:l}=ee[i.kind],f=i.rotation??0;let v=Pn[(Pn.indexOf(d.side)+f/90)%Pn.length],{x:c,y:a}=d;switch(f){case 90:c=l-d.y,a=d.x;break;case 180:c=p-d.x,a=l-d.y;break;case 270:c=d.y,a=p-d.x;break}return i.mirrored&&(c=(f===90||f===270?l:p)-c,v=Ki[v]),{...d,x:c,y:a,side:v}}const te="inner-center",Ze={"bat-inner":"BAT","9v-inner":"9V"};function ge(i){return i==="bat-inner"||i==="9v-inner"}function Qe(i){return i===te||ge(i)}function Pe(i,d){if(i.device===d.device){if(i.pad===te&&ge(d.pad))return d.pad;if(d.pad===te&&ge(i.pad))return i.pad}}const Le=(i,d,p,l="IPEX")=>({id:i,label:l,kind:"rf",rf:{connector:"ipex",band:d,role:p}});function je(i,d){return!!(i?.rf&&d?.rf&&i.rf.connector===d.rf.connector&&i.rf.band===d.rf.band&&i.rf.role!==d.rf.role)}const xt={nominalVoltage:22.2,fullVoltage:25.2};function on(i,d){return i==="battery-6s"&&d==="power-lead"||i==="power-lead"&&d==="battery-6s"}const tn=[{kind:"fc",name:"F722 飞控",category:"飞行控制",description:"供电 · UART · I²C",pads:Rt},{kind:"esc",name:"四合一电调",category:"动力系统",description:"4 路电机 · 飞控与电池焊盘",pads:Et},{kind:"battery-6s",name:"6S 锂电池",category:"动力系统",description:"LiPo · 22.2V · XT60",pads:[{id:"xt60",label:"XT60",kind:"xt60"}]},{kind:"power-lead",name:"XT60 电源线",category:"动力系统",description:"XT60 · 红正黑负",pads:[{id:"xt60",label:"XT60",kind:"xt60"},{id:"plus",label:"正极",kind:"power"},{id:"minus",label:"负极",kind:"ground"}]},{kind:"capacitor",name:"1000µF 35V 电容",category:"动力系统",description:"有极性电解电容",pads:[{id:"plus",label:"正极",kind:"power",powerDirection:"in",inputVoltage:{min:0,max:35}},{id:"minus",label:"负极",kind:"ground"}]},{kind:"motor",name:"2207 1960KV 电机",category:"动力系统",description:"三相无刷电机",pads:[{id:"phase-a",label:"A 相",kind:"motor-phase"},{id:"phase-b",label:"B 相",kind:"motor-phase"},{id:"phase-c",label:"C 相",kind:"motor-phase"}]},{kind:"elrs",name:"ELRS 接收机",category:"遥控接收",description:"CRSF 串口接收机",pads:[{id:"5v",label:"5V",kind:"power",voltage:5,powerDirection:"in"},{id:"gnd",label:"GND",kind:"ground"},{id:"rx",label:"RX",kind:"rx",uart:"serial"},{id:"tx",label:"TX",kind:"tx",uart:"serial"},Le("ipex","2.4","socket")]},{kind:"gps",name:"通用 GPS",category:"导航外设",description:"UART · I²C",pads:[{id:"5v",label:"VCC",kind:"power",voltage:5,powerDirection:"in"},{id:"gnd",label:"GND",kind:"ground"},{id:"rx",label:"RX",kind:"rx",uart:"serial"},{id:"tx",label:"TX",kind:"tx",uart:"serial"},{id:"scl",label:"SCL",kind:"scl"},{id:"sda",label:"SDA",kind:"sda"}]},{kind:"buzzer",name:"有源蜂鸣器",category:"提示音",description:"红线正极 · 黑线负极",pads:[{id:"plus",label:"+",kind:"buzzer-plus"},{id:"minus",label:"−",kind:"buzzer-minus"}]},{kind:"led",name:"LED 灯条",category:"灯光外设",description:"5V · 可寻址灯条",pads:[{id:"5v",label:"5V",kind:"power",voltage:5,powerDirection:"in"},{id:"din",label:"DIN",kind:"led-in"},{id:"gnd",label:"GND",kind:"ground"}]},{kind:"analog-camera",name:"模拟摄像头",category:"视频外设",description:"5V · 模拟视频输出",pads:[{id:"5v",label:"5V",kind:"power",voltage:5,powerDirection:"in"},{id:"gnd",label:"GND",kind:"ground"},{id:"video",label:"VID 输出",kind:"video-out"}]},{kind:"analog-vtx",name:"模拟图传",category:"视频外设",description:"7–26V 输入 · 5V 输出 · IRC",pads:[{id:"5v-out",label:"5V-OUT",kind:"power",voltage:5,powerDirection:"out"},{id:"gnd",label:"GND",kind:"ground",area:"靠近 5V-OUT"},{id:"video",label:"VIDEO",kind:"video-in"},{id:"gnd-in",label:"GND",kind:"ground",area:"靠近 7-26V-IN"},{id:"vin",label:"7-26V-IN",kind:"power",powerDirection:"in",inputVoltage:{min:7,max:26}},{id:"irc",label:"IRC",kind:"irc"},Le("ipex","5.8","socket")]},{kind:"dji-o4-pro",name:"DJI O4 Pro 图传",category:"视频外设",description:"7.4–26.4V · MSP · SBUS",pads:[{id:"vcc",label:"VCC",kind:"power",powerDirection:"in",inputVoltage:{min:7.4,max:26.4}},{id:"gnd",label:"GND",kind:"ground",area:"电源地"},{id:"rx",label:"RX",kind:"rx",uart:"serial"},{id:"tx",label:"TX",kind:"tx",uart:"serial"},{id:"signal-gnd",label:"GND",kind:"ground",area:"信号地"},{id:"sbus",label:"SBUS",kind:"sbus-out"},Le("ipex-1","5.8","socket","IPEX 1"),Le("ipex-2","5.8","socket","IPEX 2")]},{kind:"elrs-antenna",name:"2.4G ELRS 天线",category:"天线",description:"T 形 · IPEX",pads:[Le("ipex","2.4","plug")]},{kind:"vtx-antenna",name:"5.8G 图传天线",category:"天线",description:"棒状 · IPEX",pads:[Le("ipex","5.8","plug")]}],Q=i=>tn.find(d=>d.kind===i),V=i=>`${i.device}:${i.pad}`;function xe(i,d){const p=i.find(l=>l.id===d.device);return p&&Q(p.kind).pads.find(l=>l.id===d.pad)}const Ot="hs-fpv-wiring",At=1,eo=2*1024*1024;function no(i){return JSON.stringify({format:Ot,version:At,devices:i.devices,wires:i.wires},null,2)}const en=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),wt=i=>typeof i=="string"&&/^[\w-]{1,80}$/.test(i),bt=i=>typeof i=="number"&&Math.abs(i)<=1e6;function kt(i){let d;try{d=JSON.parse(i)}catch{throw new Error("文件内容不是有效的 JSON。")}if(!en(d)||d.format!==Ot)throw new Error("请选择接线模拟器导出的 JSON 文件。");if(d.version!==At)throw new Error("当前模拟器不支持此接线图文件版本。");if(!Array.isArray(d.devices)||!Array.isArray(d.wires))throw new Error("文件缺少配件或导线列表。");const p=new Map,l=d.devices.map((g,w)=>{const b=new Error(`第 ${w+1} 个配件的数据无效。`);if(!en(g))throw b;const{id:_,kind:T,x,y,rotation:S,mirrored:u}=g;if(!wt(_)||p.has(_)||!bt(x)||!bt(y)||S!==void 0&&S!==0&&S!==90&&S!==180&&S!==270||u!==void 0&&typeof u!="boolean")throw b;const h=tn.find(R=>R.kind===T);if(!h)throw b;p.set(_,h);const I={id:_,kind:h.kind,x,y};return S!==void 0&&(I.rotation=S),u!==void 0&&(I.mirrored=u),I});function f(g,w){if(!en(g)||typeof g.device!="string"||typeof g.pad!="string")throw w;const b=p.get(g.device);if(!b)throw w;const _=b.pads.find(T=>T.id===g.pad);if(!_&&!(g.pad==="tlm"&&(b.kind==="fc"||b.kind==="esc")))throw w;return{endpoint:{device:g.device,pad:g.pad},part:b,pad:_}}const v=new Set,c=new Set,a=new Set,r=[];for(const[g,w]of d.wires.entries()){const b=new Error(`第 ${g+1} 根导线的接口或连接数据无效。`);if(!en(w)||!wt(w.id)||v.has(w.id)||p.has(w.id))throw b;v.add(w.id);const _=f(w.a,b),T=f(w.b,b);if(!_.pad||!T.pad)continue;const{endpoint:x}=_,{endpoint:y}=T,S=[V(x),V(y)];if(S[0]===S[1])throw b;const u=JSON.stringify([...S].sort());if(c.has(u)||x.device===y.device&&_.part.kind!=="fc")throw b;const h=[x,y].find(N=>N.pad===te),I=_.pad.rf||T.pad.rf,R=_.pad.kind==="xt60"||T.pad.kind==="xt60";if(h&&!Pe(x,y)||x.device===y.device&&ge(x.pad)&&ge(y.pad)||I&&!je(_.pad,T.pad)||R&&(_.pad.kind!==T.pad.kind||!on(_.part.kind,T.part.kind)))throw b;const P=h?[V(h)]:I||R?S:[];if(P.some(N=>a.has(N)))throw b;for(const N of P)a.add(N);c.add(u),r.push({id:w.id,a:x,b:y})}return{devices:l,wires:r}}async function Ct(i){const d=new Image;return d.src=i,await d.decode(),d}function to(i){const d=i.cloneNode(!0),p=i.querySelectorAll("path");if(d.querySelectorAll("path").forEach((f,v)=>{const c=p[v];if(c.closest("defs"))return;if(c.matches(".wire-hit, .wire-highlight, .wire-preview")){f.remove();return}const a=getComputedStyle(c);for(const r of["fill","stroke","stroke-width","stroke-linecap","opacity"])f.style.setProperty(r,a.getPropertyValue(r))}),!d.querySelector("g[data-wire], .coax-lead"))return null;const l=i.getBBox();return{layer:d,bounds:l}}async function io(i,d){const p=i.getBoundingClientRect(),l=getComputedStyle(i.parentElement),f=l.backgroundColor,v=l.getPropertyValue("--wiring-grid-rgb"),c=E=>{const L=E.getBoundingClientRect();return{x:(L.x-p.x)/d,y:(L.y-p.y)/d,width:L.width/d,height:L.height/d}},a=[...i.querySelectorAll(".device-body .board-illustration")].map(E=>{const L=getComputedStyle(E),q=new DOMMatrix(getComputedStyle(E.parentElement).transform).multiply(new DOMMatrix(L.transform==="none"?void 0:L.transform));return{url:E.currentSrc||E.src,box:c(E),width:parseFloat(L.width),height:parseFloat(L.height),transform:q}}),r=[...i.querySelectorAll(".board-indicator.lit")].map(E=>({box:c(E),color:E.style.getPropertyValue("--led-color"),strip:E.dataset.indicator==="strip",opacity:Number(getComputedStyle(E).opacity)})),g=[...i.querySelectorAll(".pad.connected:not(.rf-port, .xt60-port) .pad-ring, .elrs .pad:not(.rf-port) .pad-ring")].map(c),w=to(i.querySelector(".wires")),b=[...a.map(E=>E.box),...g];if(w&&b.push(w.bounds),!b.length)throw new Error("画布上没有可导出的配件。");const _=32;let T=1/0,x=1/0,y=-1/0,S=-1/0;for(const E of b)T=Math.min(T,E.x),x=Math.min(x,E.y),y=Math.max(y,E.x+E.width),S=Math.max(S,E.y+E.height);T=Math.floor(T)-_,x=Math.floor(x)-_;const u=Math.ceil(y)+_-T,h=Math.ceil(S)+_-x,I=Math.min(2,4096/Math.max(u,h)),R=document.createElement("canvas");R.width=Math.ceil(u*I),R.height=Math.ceil(h*I);const P=R.getContext("2d");if(!P)throw new Error("当前浏览器无法生成 PNG 图片。");P.fillStyle=f,P.fillRect(0,0,R.width,R.height),P.scale(I,I);const N=document.createElement("canvas");N.width=N.height=22;const ie=N.getContext("2d");ie.fillStyle=`rgb(${v} / .45)`,ie.arc(11,11,.9,0,2*Math.PI),ie.fill(),P.fillStyle=P.createPattern(N,"repeat"),P.fillRect(0,0,u,h),P.translate(-T,-x);const Y=await Promise.all(a.map(E=>Ct(E.url)));a.forEach(({box:E,width:L,height:J,transform:q},le)=>{P.save(),P.translate(E.x+E.width/2,E.y+E.height/2),P.transform(q.a,q.b,q.c,q.d,0,0),P.drawImage(Y[le],-L/2,-J/2,L,J),P.restore()});for(const{box:{x:E,y:L,width:J,height:q},color:le,strip:we,opacity:be}of r)P.fillStyle=le,P.shadowColor=le,P.shadowBlur=4*I,we?(P.globalAlpha=be,P.beginPath(),P.ellipse(E+J/2,L+q/2,J/2,q/2,0,0,2*Math.PI),P.fill(),P.globalAlpha=1):P.fillRect(E,L,J,q);if(P.shadowBlur=0,w){const{layer:E}=w;E.setAttribute("viewBox",`${T} ${x} ${u} ${h}`),E.setAttribute("width",String(R.width)),E.setAttribute("height",String(R.height)),E.setAttribute("preserveAspectRatio","none");const L=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(E)],{type:"image/svg+xml"}));try{P.drawImage(await Ct(L),T,x,u,h)}finally{URL.revokeObjectURL(L)}}for(const{x:E,y:L,width:J,height:q}of g)P.beginPath(),P.ellipse(E+J/2,L+q/2,J/2-.5,q/2-.5,0,0,2*Math.PI),P.strokeStyle="#fff5cf",P.lineWidth=1,P.stroke();return new Promise((E,L)=>{R.toBlob(J=>J?E(J):L(new Error("无法生成 PNG 图片。")),"image/png")})}function St(i,d){const p=URL.createObjectURL(i),l=document.createElement("a");l.href=p,l.download=d,document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(p),6e4)}function Vt(i){const d=new Map;for(const p of i){const l=Q(p.kind).pads,f=p.kind==="battery-6s"?[{id:"plus",label:"正极",kind:"power",voltage:xt.nominalVoltage,maxOutputVoltage:xt.fullVoltage,powerDirection:"out"},{id:"minus",label:"负极",kind:"ground"}]:[];for(const v of[...l,...f]){const c={device:p.id,pad:v.id};d.set(V(c),{endpoint:c,device:p,pad:v})}}return d}function Nt(i,d){return d.flatMap(p=>{const{a:l,b:f,wire:v}=p;return l.pad.rf||f.pad.rf?[]:l.pad.kind!=="xt60"&&f.pad.kind!=="xt60"?[p]:l.pad.kind!==f.pad.kind||!on(l.device.kind,f.device.kind)?[]:["plus","minus"].map(c=>({wire:v,a:i.get(V({device:l.device.id,pad:c})),b:i.get(V({device:f.device.id,pad:c}))}))})}function Lt({device:i,pad:d}){if(i.kind==="fc"&&(d.id==="vcc"||d.id===te))return"vcc";if(d.kind==="ground"&&(i.kind==="fc"||i.kind==="esc"||i.kind==="analog-vtx"))return"ground";if(d.kind==="power"&&(i.kind==="fc"||i.kind==="esc"))return d.voltage}function zt(i,d){const p=new Map,l=new Map;function f(a,r){p.has(a)||p.set(a,new Set),p.has(r)||p.set(r,new Set),p.get(a).add(r),p.get(r).add(a)}for(const a of i.values()){const r=Lt(a);if(r===void 0)continue;const g=JSON.stringify([a.device.id,r]),w=l.get(g);w?f(w,a):l.set(g,a)}for(const{a,b:r}of d)f(a,r);const v=new Map,c=[];for(const a of i.values()){if(v.has(a))continue;const r={terminals:[],wired:new Set,wireIds:[]},g=[a];for(v.set(a,r);g.length;){const w=g.pop();r.terminals.push(w);for(const b of p.get(w)??[])v.has(b)||(v.set(b,r),g.push(b))}c.push(r)}for(const{a,b:r,wire:g}of d){const w=v.get(a);w.wired.add(a),w.wired.add(r),w.wireIds.includes(g.id)||w.wireIds.push(g.id)}return{nets:c,byTerminal:v}}const De=({device:i,pad:d})=>d.voltage==="battery"&&(i.kind==="fc"||i.kind==="esc"),Fe=i=>i.pad.powerDirection==="out"&&typeof i.pad.voltage=="number";function Bt({wired:i}){const d=[...i],p=d.filter(c=>c.device.kind!=="capacitor"&&c.device.kind!=="power-lead");if(p.some(c=>c.pad.kind==="power"&&Lt(c)!=="vcc")&&p.some(c=>c.pad.kind==="ground"))return"POWER_SHORT";const l=d.filter(Fe),f=new Set(l.map(c=>JSON.stringify([c.device.id,c.pad.voltage])));if(new Set(l.map(c=>c.pad.voltage)).size>1||d.some(De)&&l.some(c=>c.device.kind!=="battery-6s"))return"POWER_RAIL_CONFLICT";if(f.size>1)return"POWER_OUTPUTS"}function Ut(i){return i.inputVoltage??(typeof i.voltage=="number"?{min:i.voltage,max:i.voltage}:void 0)}function Wt(i,d){return i.voltage>=d.min&&(i.maxOutputVoltage??i.voltage)<=d.max}function Gt(i){const d=new Map,p=new Map;for(const{a:l,b:f,wire:v}of i){if(l.pad.kind!=="motor-phase"||f.pad.kind!=="motor-phase")continue;const[c,a]=l.device.kind==="motor"?[l,f]:[f,l];if(c.device.kind!=="motor"||a.device.kind!=="esc")continue;const r=JSON.stringify([a.device.id,a.pad.motorChannel]),g={motor:c,esc:a,channel:r,wireId:v.id};d.has(c.device)||d.set(c.device,[]),p.has(r)||p.set(r,[]),d.get(c.device).push(g),p.get(r).push(g)}return{byMotor:d,byChannel:p}}function oo(i){const{byMotor:d,byChannel:p}=Gt(i),l=new Set;for(const f of d.values()){const v=f[0];f.length!==3||f.some(c=>c.channel!==v.channel)||p.get(v.channel)?.length===3&&(new Set(f.map(c=>c.motor)).size!==3||new Set(f.map(c=>c.esc)).size!==3||l.add(v.esc.device.id))}return l}function Xt(i,d){const p={indicators:new Map,poweredEscs:new Set,escsWithMotor:new Set,antennaWarnings:[]};if(!i.some(u=>u.kind==="battery-6s"))return p;const l=Vt(i),f=[];for(const u of d){const h=l.get(V(u.a)),I=l.get(V(u.b));h&&I&&f.push({wire:u,a:h,b:I})}const{nets:v,byTerminal:c}=zt(l,Nt(l,f)),a=new Set(v.filter(u=>Bt(u))),r=(u,h)=>l.get(V({device:u.id,pad:h})),g=(u,h)=>c.get(r(u,h)),w=(u,h)=>!a.has(u)&&[...u.wired].every(I=>I.pad.kind===h),b=new Map;function _(u,h,I){const R=r(u,h),P=c.get(R);Fe(R)&&w(P,"power")&&w(I,"ground")&&b.set(P,{pad:R.pad,ground:I})}for(const u of i)u.kind==="battery-6s"&&_(u,"plus",g(u,"minus"));const T=i.filter(u=>u.kind==="esc"&&b.get(g(u,"battery-plus"))?.ground===g(u,"battery-minus"));p.poweredEscs=new Set(T.map(u=>u.id)),T.length&&(p.escsWithMotor=oo(f));for(const u of i){if(u.kind!=="fc")continue;const h=g(u,"bat-top"),I=g(u,"gnd");if(!T.some(P=>g(P,"battery-plus")===h&&g(P,"battery-minus")===I))continue;const R=new Set(["bat"]);w(g(u,"5v"),"power")&&(R.add("5v"),_(u,"5v",I),w(g(u,"3v3"),"power")&&(R.add("3v3"),R.add("mcu"),_(u,"3v3",I))),_(u,"9v-top",I),p.indicators.set(u.id,R)}function x(u,h,I){const R=b.get(g(u,h)),P=Ut(r(u,h).pad);return R&&P&&R.ground===g(u,I)&&Wt(R.pad,P)}function y(u){const h=g(u,"din"),I=h.terminals.find(R=>R.pad.kind==="led-out"&&R.device.kind==="fc");return I&&p.indicators.get(I.device.id)?.has("mcu")&&g(I.device,"gnd")===g(u,"gnd")&&[...h.wired].every(R=>R===I||R.pad.kind==="led-in")}for(const u of i)u.kind==="analog-vtx"&&x(u,"vin","gnd-in")&&(p.indicators.set(u.id,new Set(["power"])),_(u,"5v-out",g(u,"gnd-in")));for(const u of i)(u.kind==="elrs"&&x(u,"5v","gnd")||u.kind==="dji-o4-pro"&&x(u,"vcc","gnd"))&&p.indicators.set(u.id,new Set(["power"])),u.kind==="led"&&x(u,"5v","gnd")&&y(u)&&p.indicators.set(u.id,new Set(["strip"]));const S=new Map;for(const{a:u,b:h}of f)je(u.pad,h.pad)&&(S.set(u,[...S.get(u)??[],h]),S.set(h,[...S.get(h)??[],u]));for(const u of i){if(!p.indicators.get(u.id)?.has("power"))continue;const h=Q(u.kind).pads.filter(I=>I.rf?.role==="socket").map(I=>r(u,I.id)).filter(I=>{const R=S.get(I);return R?.length!==1||S.get(R[0])?.length!==1});h.length&&p.antennaWarnings.push({device:u,ports:h})}return p}function ao(i,d){return[...d.poweredEscs].filter(p=>!i.poweredEscs.has(p)&&d.escsWithMotor.has(p))}const ze=i=>i==="tx"||i==="rx",En=i=>i==="scl"||i==="sda",ro=i=>i==="buzzer-plus"||i==="buzzer-minus",so=i=>i==="led-in"||i==="led-out",co=i=>i==="video-in"||i==="video-out",lo=i=>i==="motor-signal"||i==="esc-current",uo=({device:i,pad:d})=>d.kind==="tx"||d.kind==="led-out"||d.kind==="video-out"||d.kind==="sbus-out"||d.kind==="motor-signal"&&i.kind==="fc"||d.kind==="esc-current"&&i.kind==="esc";function po({a:i,b:d}){const p=[i,d],l=i.pad.kind,f=d.pad.kind,v=r=>p.some(({pad:g})=>r(g.kind)),c=r=>l===r||f===r,a=(r,g)=>({code:r,message:g,severity:"error"});if(c("rf"))return je(i.pad,d.pad)?void 0:a("RF_PORT","IPEX 天线插头应接同频段设备的 IPEX 座。");if(c("xt60"))return l!==f||!on(i.device.kind,d.device.kind)?a("XT60_PORT","电池 XT60 应与电源线的 XT60 对接。"):void 0;if(p.some(r=>r.device.kind==="fc"&&r.pad.id===te))return Pe(i.endpoint,d.endpoint)?void 0:a("VCC_JUMPER","VCC 选压中间焊盘只能短接同一飞控的 BAT 或 9V 焊盘。");if(p.some(r=>r.device.kind==="capacitor"||r.device.kind==="power-lead"))return l!==f?a("POWER_POLARITY","正极接电源正极，负极接地线。"):void 0;if(c("other"))return{code:"UNKNOWN_PAD",severity:"warning",message:c("sbus-out")?"请确认目标焊盘是否为飞控专用 SBUS 输入，使用 ELRS 时留空。":"暂无对应校验规则，请确认焊盘用途。"};if(c("motor-phase"))return l!==f||!p.some(r=>r.device.kind==="esc")||!p.some(r=>r.device.kind==="motor")?a("MOTOR_PHASE","电调两侧的相线焊盘用于连接无刷电机。"):void 0;if(v(lo)){if(l!==f||i.pad.id!==d.pad.id||!p.some(r=>r.device.kind==="fc")||!p.some(r=>r.device.kind==="esc"))return a("ESC_SIGNAL","飞控与电调的 M1–M4 和 CUR 应连接同名焊盘。")}else if(v(ro)){if(l!==f||!p.some(r=>r.device.kind==="buzzer")||!p.some(r=>r.device.kind==="fc"))return a("BUZZER_POLARITY","蜂鸣器正极接飞控 B+，负极接 B−。")}else if(v(so)){if(!c("led-in")||!c("led-out"))return a("LED_SIGNAL","灯条的 DIN 应连接飞控的 LED 信号焊盘。")}else if(c("sbus-out")||c("sbus-in")){if(!c("sbus-out")||!c("sbus-in"))return a("SBUS_INPUT","O4 Pro 的 SBUS 需接飞控专用 SBUS 输入，使用 ELRS 时留空。")}else if(c("irc")){if(!p.some(r=>r.device.kind==="fc"&&r.pad.kind==="tx"))return a("IRC_UART","图传 IRC 应连接飞控的 UART TX 焊盘。")}else if(v(co)){if(!c("video-in")||!c("video-out"))return a("VIDEO_DIRECTION","视频输出应接视频输入。")}else if(v(ze)){if(l===f)return a("UART_DIRECTION",`${i.pad.label} 与 ${d.pad.label} 方向相同：TX 应连接 RX。`);if(!ze(l)||!ze(f))return a("SIGNAL_TYPE","电源或信号类型不匹配。");if(!p.some(r=>r.device.kind==="fc"))return a("UART_HOST","外设的 UART 应连接飞控。")}else if(v(En)){if(!En(l)||!En(f))return a("SIGNAL_TYPE","电源或信号类型不匹配。");if(l!==f)return a("I2C_DIRECTION","I²C 焊盘接反：SCL 应接 SCL，SDA 应接 SDA。")}else if(l==="power"&&f==="power"&&p.every(({pad:r})=>r.powerDirection==="in"&&r.voltage!=="battery"))return a("POWER_INPUTS","两个电源输入不能互相供电。")}const jt=({device:i,pad:d})=>d.kind==="ground"&&(i.kind==="fc"||i.kind==="esc"||i.kind==="battery-6s");function fo(i,d,p,l,f){if(!i.wireIds.length)return;const{wireIds:v}=i,c=[...i.wired],a=Bt({...i,wired:new Set(c.filter(b=>!p.has(b)))});if(a==="POWER_SHORT"){const b=d.filter(({a:x,b:y,wire:S})=>v.includes(S.id)&&(x.pad.kind==="power"&&y.pad.kind==="ground"||x.pad.kind==="ground"&&y.pad.kind==="power")),_=b.length?b.flatMap(({a:x,b:y})=>[x,y]):c,T=[...new Set([..._.filter(x=>x.device.kind!=="power-lead"),...c.filter(x=>x.device.kind==="battery-6s"&&x.pad.id==="plus"&&c.some(y=>y.device.id===x.device.id&&y.pad.id==="minus"))].map(x=>x.device.id))];f(a,"error","危险：电源与地线短接，请先移除错误连线。",c,v,{kind:"short",deviceIds:T,energized:l(i,i)});return}a==="POWER_RAIL_CONFLICT"?f(a,"error","电源电压不匹配，不能将不同电源轨相连。",c,v):a==="POWER_OUTPUTS"&&f(a,"error","两个电源输出不能相连。",c,v);const r=c.filter(Fe),g=c.find(De),w=c.filter(uo);v.length>1&&w.length>1&&f("SIGNAL_OUTPUTS","error","同一线路连接了多个信号输出，可能产生冲突。",w,v);for(const b of c.filter(_=>_.pad.powerDirection==="in"&&!De(_))){const{pad:_}=b,T=Ut(_);if(!T)continue;const x=T.min===T.max?`${T.min}V`:`${T.min}–${T.max}V`,y=r.find(S=>S.device.id!==b.device.id&&!Wt(S.pad,T));if(y){const S=y.pad.voltage<T.min?y.pad.voltage:y.pad.maxOutputVoltage??y.pad.voltage;f("POWER_VOLTAGE","error",`电源电压不匹配：${_.label} 需要 ${x}，电源可达 ${S}V。`,c,v)}else g&&!r.length&&f("POWER_UNVERIFIED","warning",`请确认 BAT 的实际电压满足 ${_.label} 的 ${x} 供电要求。`,c,v);r.some(S=>S.device.id===b.device.id)&&f("POWER_SELF_FEED","error","配件的电源输出不能回接自身的电源输入。",[b,...r],v)}}function ho(i,d,p){const l=(a,r)=>p.get(d.get(V({device:a.id,pad:r}))),f=new Map;function v(a,r){f.has(a)||f.set(a,new Set),f.get(a).add(r)}const c=(a,r)=>f.get(a)?.has(r)??!1;for(const a of i.filter(r=>r.kind==="battery-6s"))v(l(a,"plus"),l(a,"minus"));for(const a of i.filter(r=>r.kind==="fc")){const r=l(a,"gnd");if(c(l(a,"bat-top"),r))for(const g of["5v","9v-top","3v3"])v(l(a,g),r)}for(const a of i.filter(r=>r.kind==="analog-vtx")){const r=l(a,"gnd-in");c(l(a,"vin"),r)&&v(l(a,"5v-out"),r)}return c}function go(i,d,p,l,f){const v=new Set;for(const c of i){if(c.kind!=="capacitor"&&c.kind!=="power-lead")continue;const a=d.get(V({device:c.id,pad:"plus"})),r=d.get(V({device:c.id,pad:"minus"})),g=p.get(a),w=p.get(r);if(g===w||!g.wired.has(a)||!w.wired.has(r))continue;const b=[...g.wired].find(x=>c.kind==="capacitor"?jt(x)||x.device.kind==="analog-vtx"&&x.pad.kind==="ground":x.pad.kind==="ground"&&x.device.kind!=="battery-6s"&&x.device.kind!=="power-lead"&&x.device.kind!=="capacitor"),_=[...w.wired].find(x=>c.kind==="capacitor"?Fe(x)||De(x):x.device.kind!=="capacitor"&&(De(x)||x.pad.powerDirection==="in"));if(!b||!_)continue;const T=[...new Set([...g.wireIds,...w.wireIds])];if(c.kind==="capacitor")f("CAPACITOR_REVERSED","error","危险：电解电容正负极接反。请断电后重新接线。",[a,r,b,_],T,{kind:"capacitor-reversed",deviceIds:[c.id],energized:l(w,g)});else{const x=[...g.wired].find(S=>S.device.kind==="battery-6s"&&S.pad.id==="plus");if(!x)continue;const y=d.get(V({device:x.device.id,pad:"minus"}));if(!w.wired.has(y))continue;v.add(x),v.add(y),f("BATTERY_REVERSED","error","危险：电池供电正负极接反。请拔下 XT60 并重新接线。",[x,a,r,b,_],T,{kind:"battery-reversed",deviceIds:[...new Set([x.device.id,b.device.id,_.device.id])],energized:!0})}}return v}function vo(i){const d=new Map;for(const{a:p,b:l}of i)d.has(p)||d.set(p,[]),d.has(l)||d.set(l,[]),d.get(p).push(l),d.get(l).push(p);return d}function mo(i,d,p){const l=new Map,f=new Map;for(const v of i){const{a:c,b:a}=v,[r,g]=c.device.kind==="fc"?[c,a]:[a,c];if(r.device.kind!=="fc"||!r.pad.uart||g.device.kind==="fc"||!ze(g.pad.kind)&&g.pad.kind!=="irc")continue;const w=JSON.stringify([r.device.id,r.pad.uart]);l.has(w)||l.set(w,{host:r,peripherals:new Set,connections:[]});const b=l.get(w);b.peripherals.add(g.device.id),b.connections.push(v),ze(g.pad.kind)&&(f.has(g.device.id)||f.set(g.device.id,[]),f.get(g.device.id).push({port:w,local:g,connection:v}))}for(const{host:v,peripherals:c,connections:a}of l.values())c.size>1&&p("UART_CONFLICT","error",`${d(v.device)} UART${v.pad.uart} 被多个配件占用。`,a.flatMap(({a:r,b:g})=>[r,g]),a.map(({wire:r})=>r.id));for(const v of f.values()){if(new Set(v.map(r=>r.port)).size<2)continue;const c=d(v[0].local.device),a=v.some(r=>r.local.pad.kind==="tx")&&v.some(r=>r.local.pad.kind==="rx");p(a?"UART_PAIR":"UART_MULTIPLE","error",a?`${c} 的 TX 和 RX 未连接到同一组 UART。`:`${c} 的 ${v[0].local.pad.label} 接入了多组 UART。`,v.flatMap(({connection:{a:r,b:g}})=>[r,g]),v.map(({connection:r})=>r.wire.id))}}function yo(i,d,p){const{byMotor:l,byChannel:f}=Gt(i),v=(c,a,r)=>p(c,"error",a,r.flatMap(({motor:g,esc:w})=>[g,w]),r.map(({wireId:g})=>g));for(const[c,a]of l)new Set(a.map(r=>r.channel)).size>1&&v("MOTOR_CHANNEL",`${d(c)}的三根相线应接同一电调的同一组 M1–M4 相线焊盘。`,a),new Set(a.map(r=>r.motor)).size<a.length&&v("MOTOR_PHASE_OCCUPIED",`${d(c)}的每根相线应单独接一个电调焊盘。`,a);for(const c of f.values()){const{esc:a}=c[0],r=`${d(a.device)} M${a.pad.motorChannel}`;new Set(c.map(g=>g.motor.device)).size>1?v("MOTOR_CHANNEL_OCCUPIED",`${r} 已连接多台电机，每组只能连接一台。`,c):new Set(c.map(g=>g.esc)).size<c.length&&v("MOTOR_PHASE_OCCUPIED",`${r} 的每个相线焊盘应分别接一根电机相线。`,c)}}const xo={fc:[],elrs:["5v","gnd","tx","rx"],gps:["5v","gnd","tx","rx"],buzzer:["plus","minus"],led:["5v","gnd","din"],"analog-camera":["5v","gnd","video"],"analog-vtx":["vin","gnd-in","video"],esc:["bat","gnd","m1","m2","m3","m4"],"battery-6s":["xt60"],"power-lead":["xt60","plus","minus"],capacitor:["plus","minus"],motor:["phase-a","phase-b","phase-c"],"dji-o4-pro":["vcc","gnd","signal-gnd","tx","rx"],"elrs-antenna":["ipex"],"vtx-antenna":["ipex"]};function wo(i,d,p,l,f,v,c){const a=vo(f),r=new Set(l.flatMap(({a:w,b})=>[w,b])),g=new Set;for(const{a:w,b}of f){const[_,T]=w.device.kind==="analog-camera"?[w,b]:[b,w];_.pad.kind==="video-out"&&_.device.kind==="analog-camera"&&T.pad.kind==="video-in"&&T.device.kind==="fc"&&g.add(T.device.id)}for(const w of i){const b=y=>d.get(V({device:w.id,pad:y})),_=v(w);if(w.kind==="fc"){const y=b("vcc"),S=b(te);r.has(y)&&!(a.get(S)??[]).some(u=>ge(u.pad.id))&&c("VCC_UNSELECTED","error",`${_} 的 VCC 未供电。请将中间焊盘短接到 BAT 或 9V。`,[y,S],p.get(y).wireIds)}const x=xo[w.kind].map(b).filter(y=>{const S=p.get(y),u=a.get(y)??[];return w.kind==="power-lead"?u.length===0:w.kind==="esc"&&(y.pad.kind==="ground"||y.pad.kind==="power")?!S.terminals.some(h=>h.device.kind==="fc"&&h.pad.kind===y.pad.kind&&(h.pad.kind==="ground"||De(h))):y.pad.kind==="power"?!S.terminals.some(h=>h.device.id!==w.id&&(Fe(h)||De(h))):y.pad.kind==="ground"?!S.terminals.some(h=>h.device.id!==w.id&&jt(h)):ze(y.pad.kind)?!u.some(h=>h.device.kind==="fc"):u.length===0});if(x.length){const y=x.map(({pad:S})=>S.label==="GND"&&S.area&&w.kind==="dji-o4-pro"?`GND（${S.area}）`:S.label);c("REQUIRED_PADS","missing",`${_} 还需正确连接 ${y.join("、")}。`,x)}if(w.kind==="analog-vtx"&&g.size){const y=b("video"),S=a.get(y)??[];if(S.length&&!S.some(u=>u.device.kind==="analog-camera"||g.has(u.device.id))){const u=f.filter(({a:h,b:I})=>h===y||I===y).map(({wire:h})=>h.id);c("VIDEO_SOURCE","warning",`${_} 的 VIDEO 已连接，摄像头接在另一块飞控上。请确认视频信号的来源。`,[y,...S],u)}}if(w.kind==="gps"){const y=b("scl"),S=b("sda");if(!r.has(y)&&!r.has(S))continue;const u=P=>p.get(P).terminals.filter(N=>N.device.kind==="fc"&&N.pad.kind===P.pad.kind).map(N=>N.device.id),h=u(y),I=u(S),R=[...h.length?[]:[y],...I.length?[]:[S]];R.length?c("I2C_REQUIRED_PAIR","missing",`${_} 的 I²C 已接入，请将 SCL 和 SDA 分别接到同一飞控。`,R):h.some(P=>I.includes(P))||c("I2C_HOST","error",`${_} 的 SCL 和 SDA 应连接同一飞控。`,[y,S],[...new Set([...p.get(y).wireIds,...p.get(S).wireIds])])}}}function bo(i,d){if(!d.length&&!i.some(u=>u.kind!=="fc"))return{status:"empty",issues:[]};const p=[],l=Vt(i),f=new Map,v=new Map;for(const u of i){const h=(f.get(u.kind)??0)+1;f.set(u.kind,h),v.set(u.id,h)}const c=u=>{const{name:h}=Q(u.kind);return f.get(u.kind)>1?`${h} #${v.get(u.id)}`:h},a=(u,h,I,R,P=[],N)=>{const ie=R.map(E=>E.device.kind==="battery-6s"?{device:E.device.id,pad:"xt60"}:E.endpoint),Y=[...new Map(ie.map(E=>[V(E),E])).values()];p.push({code:u,severity:h,message:I,endpoints:Y,wireIds:P,...N&&{damage:N}})},r=[],g=[],w=new Map;for(const u of d){const h=l.get(V(u.a)),I=l.get(V(u.b));if(!h||!I){a("UNKNOWN_ENDPOINT","warning","存在无法识别焊盘的导线，请确认连接。",[h,I].filter(N=>!!N),[u.id]);continue}const R={wire:u,a:h,b:I};r.push(R);const P=po(R);if(P){const N=ie=>`${c(ie.device)} ${ie.pad.label}`;a(P.code,P.severity,`${N(h)} ↔ ${N(I)}：${P.message}`,[h,I],[u.id])}else if(g.push(R),h.pad.rf||h.pad.kind==="xt60")for(const N of[h,I])w.has(N)||w.set(N,[]),w.get(N).push(R)}for(const[u,h]of w)if(h.length>1){const I=u.pad.kind==="xt60"?"XT60_PORT_OCCUPIED":"RF_PORT_OCCUPIED";a(I,"error",`${c(u.device)} ${u.pad.label} 接口只能连接一个插头或插座。`,h.flatMap(({a:R,b:P})=>[R,P]),h.map(({wire:R})=>R.id))}const b=Nt(l,r),{nets:_,byTerminal:T}=zt(l,b),x=ho(i,l,T),y=go(i,l,T,x,a);for(const u of _)fo(u,b,y,x,a);mo(g,c,a),yo(g,c,a),wo(i,l,T,b,g,c,a);for(const{device:u,ports:h}of Xt(i,d).antennaWarnings){const I=h.map(({pad:R})=>R.label).join("、");a("POWERED_WITHOUT_ANTENNA","warning",`${c(u)} 已通电，${I} 缺少正确连接的天线，射频功放可能烧毁。请先断电再接天线。`,h)}const S={error:0,missing:1,warning:2};return p.sort((u,h)=>S[u.severity]-S[h.severity]),{status:p.length?"issues":"pass",issues:p}}const ko=[{frequency:523,length:.09,gap:.042},{frequency:659,length:.09,gap:.042},{frequency:784,length:.105,gap:.12},{frequency:659,length:.18,gap:.075},{frequency:1047,length:.22,gap:0}];function Co(){let i,d,p=0;const l=new Set;function f(){if(!(typeof AudioContext>"u"))try{i??=new AudioContext,i.state!=="running"&&!d&&(d=i.resume().catch(()=>{}).finally(()=>{d=void 0}))}catch{}}function v(){p++;for(const r of l)r.stop();l.clear()}function c(){const r=i;if(!r)return;v();const g=p,w=()=>{if(g!==p||r.state!=="running")return;let b=r.currentTime+.025;for(const _ of ko){const T=b+_.length,x=r.createOscillator(),y=r.createGain();x.type="triangle",x.frequency.value=_.frequency,y.gain.setValueAtTime(.001,b),y.gain.exponentialRampToValueAtTime(.12,b+.008),y.gain.exponentialRampToValueAtTime(.025,T-.018),y.gain.exponentialRampToValueAtTime(.001,T),x.connect(y),y.connect(r.destination),l.add(x),x.onended=()=>{l.delete(x),x.disconnect(),y.disconnect()},x.start(b),x.stop(T),b=T+_.gap}};r.state==="running"?w():d?.then(w)}function a(){v(),i?.close().catch(()=>{}),i=void 0}return{prepare:f,play:c,stop:v,dispose:a}}const So=["viewBox"],Io=["data-wire"],_o=["d","stroke-width"],Mo=["d","onClick"],$o=["d"],Po=["data-wire"],To=["d","stroke-width"],Eo=["d","onClick"],Ro=["d"],Do=["d"],Oo=["data-wire"],Ao=["d","stroke-width"],Vo=["d","onClick"],No=["d"],Lo=["d"],zo=["transform"],Bo=["d"],Uo=["d"],Wo=["data-device-id"],Go=["aria-label","aria-controls","onPointerdown","onClick"],Xo=["src"],jo=["data-indicator","aria-label"],Fo=["id"],Jo=["aria-label"],qo=["aria-label","onClick"],Ho=["aria-label","aria-pressed","onClick"],Ko=["aria-label","onClick"],Yo=["data-device","data-pad","title","aria-pressed","aria-label","onPointerdown","onClick"],Zo={class:"tool-dock"},Qo={class:"toolbar"},ea=["aria-expanded"],na=["disabled"],ta=["disabled"],ia=["aria-expanded"],oa={key:0,id:"wiring-file-actions",class:"popover file-menu",role:"group","aria-label":"接线图文件"},aa=["disabled"],ra=["disabled"],da={key:0,id:"wiring-parts",class:"popover parts"},sa=["onClick","onDragstart"],ca=["src"],la={key:0,class:"connection-hint","aria-live":"polite"},ua={class:"antenna-alert",role:"alert"},pa={class:"check-dock"},fa=["aria-label","aria-expanded","title"],ha={class:"check-label"},ga={class:"wire-count"},va={key:0,id:"wiring-check",class:"popover check-panel","aria-label":"接线检查结果"},ma={class:"check-heading"},ya={role:"status"},xa=["onClick"],wa={key:1,class:"check-issue"},ba={class:"toolbar zoom-dock","aria-label":"画布缩放"},ka=["disabled"],Ca={"aria-label":"当前缩放比例"},Sa=["disabled"],Ia=["aria-pressed","title"],It=.15,_t=4,Mt=1.25,_a=8,$t=3,Ma=Pt({__name:"wiring-simulator",setup(i){Ai(e=>({bc9aa136:m(P)}));const d=Bi(),p=zi(),l=Vi("hs-fpv-wiring-theme","system",void 0,{initOnMounted:!0,writeDefaults:!1}),f=B(()=>p.value&&(l.value==="dark"||l.value==="system"&&d.value));$i(()=>({htmlAttrs:{class:f.value?"wiring-canvas-open wiring-dark":"wiring-canvas-open"}})),Pi({title:"接线模拟器 - 花生FPV",description:"通过交互式接线练习认识飞控和 ELRS 接收机。"});let v=0;const c=()=>`d${++v}`,a=j([{id:c(),kind:"fc",x:96,y:62},{id:c(),kind:"elrs",x:500,y:60}]),r=j([]),g=B(()=>Xt(a.value,r.value)),w=B(()=>g.value.indicators),b=Co();let _=[];function T(){a.value.some(e=>e.kind==="motor")&&b.prepare()}In(g,(e,n)=>{const o=ao(n,e);o.length?(_=o,b.play()):_.length&&!_.some(t=>e.poweredEscs.has(t))&&(_=[],b.stop())}),gt(b.dispose);const x=j(null),y=j(null),S=j(null),u=j([]),h=j(null),I=j(null),R=Ui(),P=B(()=>`${R.mobileHeaderOffset}px`),{width:N,height:ie}=Ni(h),Y=j(null),E=j(!1),L=Li("(max-width: 767px), (hover: none) and (pointer: coarse)"),J=j(),q=B(()=>J.value??(p.value&&!L.value)),le=j(!1),we=j(null),be=j(!1),Dn=j(null),On=j(null),Be=j(!1),Ue=j(!1);function An(e){we.value=we.value===e?null:e}function an(){Ge(),le.value=!1,we.value=null,be.value&&gn()}function Je(){return{x:(N.value||Me.width)/2,y:(ie.value||Me.height)/2}}function rn(e){return Math.max(It,Math.min(_t,e))}function Vn(e,n,o,t){const s=Je(),k=Math.min(44,s.x*.12,s.y*.2),C=rn(Math.min(1.4,2*(s.x-k)/(o-e),2*(s.y-k)/(t-n)));return{scale:C,offset:{x:s.x-(e+o)/2*C,y:s.y-(n+t)/2*C}}}const F=B(()=>Y.value??Vn(0,0,Me.width,Me.height)),Ft=B(()=>{const{scale:e,offset:n}=F.value;return{width:`${Me.width}px`,height:`${Me.height}px`,transform:`translate(${n.x}px, ${n.y}px) scale(${e})`,"--device-toolbar-scale":1/e}}),Jt=B(()=>{const{scale:e,offset:n}=F.value;return{"--grid-alpha":Math.min(.5,e*.53),backgroundPosition:`${n.x}px ${n.y}px`,backgroundSize:`${22*e}px ${22*e}px`}});function dn(){if(re())return;if(!a.value.length){Y.value=null;return}const e=a.value.map(yn);Y.value=Vn(Math.min(...e.map(n=>n.x))-18,Math.min(...e.map(n=>n.y))-32,Math.max(...e.map(n=>n.x+n.width))+18,Math.max(...e.map(n=>n.y+n.height))+18)}function oe(e){const n=h.value.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function ve(e){const{scale:n,offset:o}=F.value;return{x:(e.x-o.x)/n,y:(e.y-o.y)/n}}function sn(e,n,o=ve(n)){const t=rn(e);Y.value={scale:t,offset:{x:n.x-o.x*t,y:n.y-o.y*t}}}function Nn(e){re()||sn(F.value.scale*e,Je())}function qt(e){if(re())return;const n=e.deltaMode===1?e.deltaY*16:e.deltaMode===2?e.deltaY*100:e.deltaY;sn(F.value.scale*Math.exp(-n*.0025),oe(e))}const Ln=j(null),me=_n(null),cn=j(!1),ln=B(()=>cn.value&&!me.value?"重新检查":"检查接线"),Oe=_n(null),un=B(()=>new Set(Oe.value?.wireIds)),Ht=B(()=>new Set(Oe.value?.endpoints.map(V))),zn={short:{title:"电源短路",advice:"请立即断电，检查接线。"},"capacitor-reversed":{title:"电容正负极接反",advice:"请立即断电。"},"battery-reversed":{title:"电池正负极接反",advice:"请拔下电池。"},multiple:{title:"检测到多处危险接线",advice:"请立即断电。"}},Bn=B(()=>bo(a.value,r.value)),qe=B(()=>r.value.some(e=>e.a.pad==="xt60")?Bn.value.issues.filter(e=>e.damage?.energized):[]),Un=({damage:e})=>JSON.stringify([e?.kind,[...e?.deviceIds??[]].sort()]),Wn=e=>e.length>1?"multiple":e[0].damage.kind,Se=_n();let Kt=0,Gn,He;const Yt=[{severity:"error",label:"错接"},{severity:"missing",label:"缺线"},{severity:"warning",label:"待确认"}],Zt=B(()=>Yt.map(e=>({...e,issues:me.value?.issues.filter(n=>n.severity===e.severity)??[]}))),Qt=B(()=>me.value?me.value.status==="empty"?"暂无接线可检查":me.value.status==="pass"?"接线检查通过":`发现 ${me.value.issues.length} 项问题`:"接线已更改，请重新检查");In(()=>[a.value.map(e=>[e.id,e.kind]),r.value.map(e=>[e.id,V(e.a),V(e.b)])],()=>{me.value=null,Oe.value=null,qe.value.length||pn()}),In(qe,(e,n)=>{const o=new Set(n.map(Un)),t=e.filter(s=>!o.has(Un(s)));t.length&&Xn(t)});function pn(){clearTimeout(Gn),Se.value=void 0,He?.pause(),He=void 0}function Xn(e){pn();const n=e.flatMap(A=>A.damage?[A.damage]:[]);if(!n.length||!h.value)return;const o=new Set(n.flatMap(A=>A.deviceIds)),t=h.value.getBoundingClientRect(),{scale:s,offset:k}=F.value,C=a.value.filter(A=>o.has(A.id)).map(A=>{const{x:X,y:z,width:U,height:W}=$e(A);return{id:A.id,x:Math.max(t.left+12,Math.min(t.right-12,t.left+k.x+(X+U/2)*s)),y:Math.max(t.top+12,Math.min(t.bottom-12,t.top+k.y+(z+W/2)*s))}}),M=Wn(e.filter(A=>A.damage));Se.value={id:++Kt,points:C,...zn[M]},He=new Audio(`/audio/wiring/${M}.mp3`),He.play().catch(()=>{}),Gn=setTimeout(()=>{Se.value=void 0},3400)}gt(pn);function fn(){re()||(me.value=Bn.value,Oe.value=null,cn.value=!0,le.value=!0,Xn(me.value.issues))}function jn(){le.value=!1,Ln.value?.focus({preventScroll:!0})}function ei(e){Oe.value=e,jn();const n=e.endpoints.map(Z),{scale:o,offset:t}=F.value;if(n.every(z=>{const U=z.x*o+t.x,W=z.y*o+t.y;return U>=20&&U<=N.value-20&&W>=64&&W<=ie.value-68}))return;const s=Math.min(...n.map(z=>z.x))-24,k=Math.max(...n.map(z=>z.x))+24,C=Math.min(...n.map(z=>z.y))-24,M=Math.max(...n.map(z=>z.y))+24,A=rn(Math.min(o,(N.value-40)/(k-s),(ie.value-132)/(M-C))),X=Je();Y.value={scale:A,offset:{x:X.x-(s+k)/2*A,y:X.y-(C+M)/2*A}}}const Ae=B(()=>{const e=new Map;for(const n of r.value){const o=Pe(n.a,n.b);o&&e.set(n.a.device,{wire:n,source:o})}return e}),ye=B(()=>{const e=new Map;for(const n of r.value)Pe(n.a,n.b)||(e.set(V(n.a),{wire:n,end:"a"}),e.set(V(n.b),{wire:n,end:"b"}));return e}),ni=B(()=>{const e=y.value,n=e?.moved?e.attachment?.wire.id:void 0;return r.value.filter(o=>o.id!==n&&o.a.pad!=="xt60"&&!Pe(o.a,o.b)&&!xe(a.value,o.a)?.rf)}),Fn=B(()=>{const e=y.value;return e?.moved&&e.jumper?"拖到 BAT 或 9V 切换，拖离焊盘取消短接":e?.moved&&e.fixed.pad===te?"拖到 BAT 或 9V 焊盘选择 VCC 电压":e?.moved&&e.origin.pad==="xt60"?e.attachment?"松开以拔下 XT60":"拖到配对的 XT60 接口":e?.moved&&xe(a.value,e.fixed)?.rf?e.attachment?"松到同频 IPEX 接口改接，松到空白处拔下":"将天线插头拖到同频 IPEX 接口":e?.moved&&e.attachment?"松到另一焊盘改接，松到空白处移除":e?.moved?"拖到目标焊盘后松开":x.value?"点按另一个焊盘完成连线":""});function ue(e=!1){u.value.push({devices:a.value.map(n=>({...n})),wires:r.value.map(n=>({...n,a:{...n.a},b:{...n.b}})),camera:e?Y.value:void 0}),u.value.length>100&&u.value.shift()}function hn(){let e=c();for(;a.value.some(n=>n.id===e)||r.value.some(n=>n.id===e);)e=c();return e}function gn(){be.value=!1,Dn.value?.focus({preventScroll:!0})}function ti(e){e.currentTarget.contains(e.relatedTarget)||(be.value=!1)}function ii(){gn(),On.value?.click()}function Jn(e){ue(!0),an(),me.value=null,Oe.value=null,cn.value=!1,a.value=e.devices,r.value=e.wires,dn()}async function oi(e){const n=e.currentTarget,o=n.files?.[0];if(n.value="",!(!o||Be.value)){Be.value=!0;try{if(o.size>eo)throw new Error("接线图 JSON 文件不能超过 2 MB。");const t=kt(await o.text());if(re())throw new Error("请结束当前画布操作后重新导入。");Jn(t),Di("接线图已导入，可用撤销恢复上一张图。")}catch(t){mt(t instanceof Error?t.message:"无法导入接线图。")}finally{Be.value=!1}}}async function qn(e){if(!(re()||e==="png"&&(Ue.value||!I.value))){gn();try{if(e==="json"){const n=no({devices:a.value,wires:r.value});St(new Blob([n],{type:"application/json"}),"fpv-wiring.json")}else Ue.value=!0,St(await io(I.value,F.value.scale),"fpv-wiring.png")}catch{mt(e==="png"?"无法生成接线图 PNG，请重试。":"无法导出接线图 JSON，请重试。")}finally{e==="png"&&(Ue.value=!1)}}}function ai(e){const n=ee[e];if(n.antennaLead){const G=Q(e).pads[0],ke=a.value.find(Sn=>Q(Sn.kind).pads.some(Mi=>je(G,Mi)));if(!ke)return;const Ye=$e(ke),Cn=a.value.filter(Sn=>Sn.kind===e).length;return{x:ke.kind==="analog-vtx"?Ye.x-n.width-32-Cn*36:Ye.x+Ye.width+28+Cn*36,y:Ye.y+14+Cn*34}}if(e==="fc"||e==="elrs"||e==="gps")return;const o=e==="battery-6s"?a.value.find(G=>G.kind==="power-lead"):void 0;if(o){const G=$e(o);return{x:G.x-n.width-32,y:G.y-27}}const s=e==="motor"||e==="power-lead"||e==="battery-6s"||e==="capacitor"?a.value.find(G=>G.kind==="esc"):void 0,k=s??a.value.find(G=>G.kind==="fc");if(!k)return;const C=$e(k),{width:M,height:A}=n,X=e==="analog-camera",z=e==="led"?ee.buzzer.width+28:X?42:e==="analog-vtx"||e==="dji-o4-pro"?60:0;let U=C.x+z,W=X?C.y-A-96:C.y+C.height+96;s&&e==="motor"?(U=C.x-M-40,W=C.y-46):s&&(e==="power-lead"||e==="battery-6s")?(U=C.x-M-(e==="battery-6s"?242:40),W=C.y+C.height-66):s&&e==="capacitor"&&(U=C.x+92,W=C.y+C.height+42);const ht=a.value.map(yn).filter(G=>G.x<U+M+12&&G.x+G.width+12>U).sort((G,ke)=>X?ke.y-G.y:G.y-ke.y);for(const G of ht){const ke=G.y+G.height+44;W<ke&&W+A+44>G.y&&(W=X?G.y-A-44:ke)}return{x:U,y:W}}function Hn(e,n){ue();const o=a.value.length%4*28,t=ve(Je()),s=ee[e],k=e==="gps"&&!n&&!Y.value&&a.value.some(z=>z.kind==="elrs"),C=n?void 0:ai(e),M=n??C??{x:Y.value?t.x-s.width/2+o:(e==="fc"?96:500)+o,y:Y.value?t.y-s.height/2+o:(k?284:62)+o},A={id:hn(),kind:e,...M};a.value.push(A),L.value&&(J.value=!1);const X=a.value[a.value.length-1];if(k||C||s.antennaLead&&!n){const{scale:z,offset:U}=F.value,W=yn(X);(W.x*z+U.x<0||(W.x+W.width)*z+U.x>N.value||W.y*z+U.y<0||(W.y+W.height)*z+U.y>ie.value-58)&&dn()}return X}function ri(){re()||Be.value||Jn(kt(Fi))}function di(){ue(),a.value=[],r.value=[],Ge()}function si(){const e=u.value.pop();e&&(a.value=e.devices,r.value=e.wires,e.camera!==void 0&&(Y.value=e.camera),Ge())}function Kn(e){re()||(ue(),e.rotation=Yi(e.rotation,e.mirrored),it(e))}let Yn=null;yt("focusin",({target:e})=>{Yn=e instanceof HTMLElement&&e.matches(":focus-visible")?e:null}),yt("keydown",e=>{if(e.key!==" "||e.defaultPrevented||e.isComposing||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||re())return;const n=e.target instanceof HTMLElement?e.target:null;if(n?.closest("input, select, textarea, [contenteditable]"))return;const o=n===Yn?n:null;if(o?.matches(':is(button, a, [role="button"]):not(.device-body)'))return;const t=o?.matches(".device-body")?o.closest(".device"):null,s=I.value?.querySelector(".device:hover"),k=(t??s)?.dataset.deviceId,C=a.value.find(M=>M.id===k);C&&(e.preventDefault(),e.repeat||Kn(C))});function ci(e){re()||(ue(),e.mirrored=!e.mirrored,it(e))}function li(e){we.value===e&&(we.value=null),ue(),a.value=a.value.filter(n=>n.id!==e),r.value=r.value.filter(n=>n.a.device!==e&&n.b.device!==e),Ge()}function Te(e){ue();const n=r.value.find(o=>o.id===e);if(n?.a.pad==="xt60"){const o=a.value.find(t=>t.kind==="battery-6s"&&(t.id===n.a.device||t.id===n.b.device));if(o){const t=Z({device:o.id,pad:"xt60"}),s=Ke[t.side]*Math.PI/180;o.x-=26*Math.cos(s),o.y-=26*Math.sin(s)}}r.value=r.value.filter(o=>o.id!==e)}function Zn(e,n){const o=Ae.value.get(e);o?.source!==n&&(ue(),o&&(r.value=r.value.filter(t=>t.id!==o.wire.id)),n&&r.value.push({id:hn(),a:{device:e,pad:n},b:{device:e,pad:te}}))}function Qn({device:e,pad:n}){const o=Ae.value.get(e);Zn(e,ge(n)&&o?.source!==n?n:void 0)}function ui(e,n){const o=Ae.value.get(e)?.source;if(n==="vcc")return o?`VCC 输出：${Ze[o]}`:"VCC 未供电";if(n===te)return o?`VCC 输出：${Ze[o]} · 点击取消短接`:"拖到 BAT 或 9V 选择 VCC 电压";if(ge(n))return o===n?"点击取消短接":`点击将 VCC 切换到 ${Ze[n]}`}function pe(e,n,o){return e?.device===n&&e.pad===o}function vn(e,n,o){if(pe(e,n.device,n.pad)||e.device===n.device&&a.value.find(k=>k.id===e.device)?.kind!=="fc")return!1;if(e.pad===te||n.pad===te)return!o&&!!Pe(e,n);if(e.device===n.device&&ge(e.pad)&&ge(n.pad))return!1;const t=xe(a.value,e),s=xe(a.value,n);if(t?.kind==="xt60"||s?.kind==="xt60"){const k=a.value.find(M=>M.id===e.device),C=a.value.find(M=>M.id===n.device);return t?.kind==="xt60"&&s?.kind==="xt60"&&on(k?.kind,C?.kind)&&![e,n].some(M=>ye.value.has(V(M)))}return t?.rf||s?.rf?je(t,s)?[e,n].every(k=>{const C=ye.value.get(V(k))?.wire;return!C||C.id===o}):!1:!r.value.some(k=>k.id!==o&&(pe(k.a,e.device,e.pad)&&pe(k.b,n.device,n.pad)||pe(k.b,e.device,e.pad)&&pe(k.a,n.device,n.pad)))}function mn(e,n,o=!0){if(!vn(e,n))return;const t=Pe(e,n);if(t){Zn(e.device,t);return}o&&ue(),e.pad==="xt60"&&tt(e,n),r.value.push({id:hn(),a:e,b:n})}function pi(e,n){ue(),e.wire[e.end]=n}function et(e){if(Qe(e.pad)){Qn(e);return}const n=e.pad==="xt60"?ye.value.get(V(e)):void 0;if(n){Te(n.wire.id),x.value=null;return}const o=x.value;x.value=o?null:e,o&&mn(o,e)}function fi(e){const n=ee[e.kind],o=$e(e);return{left:`${o.x}px`,top:`${o.y}px`,width:`${o.width}px`,height:`${o.height}px`,"--part-width":`${n.width}px`,"--part-height":`${n.height}px`,"--part-rotation":`${e.rotation??0}deg`,"--part-mirror":e.mirrored?-1:1}}function hi(e,n){const o=Tn(e,n);return{left:`${o.x}px`,top:`${o.y}px`,width:o.hitWidth===void 0?void 0:`${o.hitWidth}px`}}function gi(e){return Q(e.kind).pads.filter(n=>n.rf?.role!=="plug"||!ye.value.has(V({device:e.id,pad:n.id})))}function yn(e){const n=$e(e);if(!ee[e.kind].antennaLead||ye.value.has(V({device:e.id,pad:"ipex"})))return n;const o=Tn(e,"ipex"),t=Math.min(0,o.x-10),s=Math.min(0,o.y-10);return{x:n.x+t,y:n.y+s,width:Math.max(n.width,o.x+10)-t,height:Math.max(n.height,o.y+10)-s}}function Z(e){const n=a.value.find(s=>s.id===e.device),o=$e(n),t=Tn(n,e.pad);return{x:o.x+t.x,y:o.y+t.y,side:t.side}}const Ke={right:0,down:90,left:180,up:-90};function nt(e){const n=ye.value.get(V({device:e,pad:"xt60"}));return n?.wire[n.end==="a"?"b":"a"]}function tt(e,n){const o=a.value.find(C=>C.id===e.device),t=a.value.find(C=>C.id===n.device);o.rotation=t.rotation,o.mirrored=t.mirrored;const s=Z(e),k=Z(n);o.x+=k.x-s.x,o.y+=k.y-s.y}function it(e){const n=nt(e.id);n&&tt(n,{device:e.id,pad:"xt60"})}function We(e,n){const o=Z(e),t=Z(n),s=Ke[o.side]*Math.PI/180,k=(o.x+t.x)/2+22*Math.cos(s),C=(o.y+t.y)/2+22*Math.sin(s);return`M ${o.x} ${o.y} Q ${k} ${C}, ${t.x} ${t.y}`}const ot=B(()=>{const e=y.value;return!e?.moved||!e.target||!Pe(e.fixed,e.target)?"":We(e.fixed,e.target)});function vi(e,n,o){const t=Math.hypot(e.x-n.x,e.y-n.y),s=Math.min(70,t*.4),k=(C,M)=>{const A=M*Math.PI/180;return`${C.x+Math.cos(A)*s} ${C.y+Math.sin(A)*s}`};return`M ${e.x} ${e.y} C ${k(e,Ke[e.side])}, ${k(n,o)}, ${n.x} ${n.y}`}const mi=B(()=>a.value.flatMap(e=>{const n=Qi(e);if(!n)return[];const o=$e(e),t={...n,x:o.x+n.x,y:o.y+n.y},s={device:e.id,pad:"ipex"},k=ye.value.get(V(s)),C=y.value,M=C?.moved&&pe(C.fixed,e.id,s.pad)?C:null,A=M?M.target:k?.wire[k.end==="a"?"b":"a"],X=Z(A??s),z=M&&!A,U=z?M.cursor:X,W=z?Math.atan2(t.y-U.y,t.x-U.x)*180/Math.PI:Ke[X.side];return[{antennaId:e.id,wireId:M?void 0:k?.wire.id,path:vi(t,U,W),plugTransform:`translate(${U.x} ${U.y}) rotate(${W})`}]}));function xn(e,n,o){let t=null,s=Math.min(38,18/F.value.scale);for(const k of a.value)for(const C of Q(k.kind).pads){if(e.pad==="xt60"?C.kind!=="xt60":C.rf?.role!=="socket")continue;const M={device:k.id,pad:C.id};if(!vn(e,M,o))continue;const A=Z(M),X=Math.hypot(A.x-n.x,A.y-n.y);X>=s||(t=M,s=X)}return t}function at(e){if(ee[e.kind].antennaLead)return"ipex";if(e.kind==="battery-6s"||e.kind==="power-lead")return"xt60"}function wn(e,n,o){const t=at(e);if(!t)return null;const s={device:e.id,pad:t};return ye.value.has(V(s))?null:(o?xn(s,Z(s)):null)??xn(s,n)}function rt(e,n){const o={device:e.id,pad:at(e)};if(o.pad==="ipex"){const t=Z(o),s=Z(n);e.x+=s.x-t.x,e.y+=s.y-t.y}mn(o,n,!1)}function dt(e,n,o){const t=Math.min(120,Math.max(24,Math.hypot(e.x-n.x,e.y-n.y)*.42)),s=M=>({x:M.x+(M.side==="left"?-t:M.side==="right"?t:0),y:M.y+(M.side==="down"?t:M.side==="up"?-t:0)}),k=s(e),C=o?s(o):n;return`M ${e.x} ${e.y} C ${k.x} ${k.y}, ${C.x} ${C.y}, ${n.x} ${n.y}`}function bn(e){const n=Z(e.a),o=Z(e.b);return dt(n,o,o)}const st=B(()=>{const e=y.value;if(!e?.moved||xe(a.value,e.fixed)?.rf)return"";const n=e.target?Z(e.target):void 0;return dt(Z(e.fixed),n??e.cursor,n)}),yi=B(()=>{const e=y.value?.attachment;return e?ct(e.wire):"var(--wiring-wire-preview, #3c8ad9)"});function ct(e){const n=xe(a.value,e.a)?.kind,o=xe(a.value,e.b)?.kind;if(n==="power"||o==="power"||n==="buzzer-plus"||o==="buzzer-plus")return"var(--wiring-wire-power)";if(n==="ground"||o==="ground"||n==="buzzer-minus"||o==="buzzer-minus")return"var(--wiring-wire-ground)";if(n==="led-in"||o==="led-in"||n==="led-out"||o==="led-out")return"var(--wiring-wire-led)";if(n==="video-in"||o==="video-in"||n==="video-out"||o==="video-out")return"var(--wiring-wire-video)";if(n==="irc"||o==="irc"||n==="motor-signal"||o==="motor-signal")return"var(--wiring-wire-control)";if(n==="motor-phase"||o==="motor-phase")return"var(--wiring-wire-phase)";if(n==="esc-current"||o==="esc-current")return"var(--wiring-wire-current)";if(n==="sbus-out"||o==="sbus-out")return"var(--wiring-wire-sbus)";if(n==="scl"||o==="scl")return"var(--wiring-wire-scl)";if(n==="sda"||o==="sda")return"var(--wiring-wire-sda)";if(n==="other"||o==="other")return"var(--wiring-wire-other)";const t=a.value.find(s=>s.id===e.a.device)?.kind==="fc"?e.a:e.b;return xe(a.value,t)?.kind==="tx"?"var(--wiring-wire-tx)":"var(--wiring-wire-rx)"}function lt(e){const n=e?.closest(".pad[data-device][data-pad]");if(!n||!I.value?.contains(n))return null;const{device:o,pad:t}=n.dataset;return o&&t?{device:o,pad:t}:null}let Ee=null,ne=null,fe=null,ae=null;const Ie=new Map;function ut(e,n){return Math.hypot(e.clientX-n.x,e.clientY-n.y)<=_a}function re(){return!!(Ee||y.value||ne||fe||ae)}function xi(e){!e.isPrimary||e.button!==0||e.target!==h.value||re()||(le.value=!1,we.value=null,h.value.setPointerCapture(e.pointerId),ne={pointerId:e.pointerId,start:oe(e),view:F.value})}function pt([e,n]){const o=Ie.get(e),t=Ie.get(n);return{center:{x:(o.x+t.x)/2,y:(o.y+t.y)/2},distance:Math.max(1,Math.hypot(o.x-t.x,o.y-t.y))}}function wi(e){if(e.pointerType!=="touch"||(Ie.set(e.pointerId,oe(e)),Ie.size!==2||fe))return;e.preventDefault(),ne=null,Ee=null,S.value=null,E.value=!1,an();const n=[...Ie.keys()],{center:o,distance:t}=pt(n);fe={pointers:n,origin:ve(o),distance:t,scale:F.value.scale};for(const s of n)h.value.setPointerCapture(s)}function bi(e,n){if(!e.isPrimary||e.button!==0||re())return;const o=xe(a.value,n)?.rf,t=Qe(n.pad);if(e.pointerType==="touch"&&(ae={pointerId:e.pointerId,origin:n,start:{x:e.clientX,y:e.clientY}},h.value.setPointerCapture(e.pointerId),!o&&!t&&n.pad!=="xt60"))return;const s=ve(oe(e)),k=e.shiftKey&&!o&&n.pad!=="xt60"?void 0:ye.value.get(V(n));if(o?.role==="socket"&&!k)return;const C=Ae.value.get(n.device),M=!k&&!e.shiftKey&&(n.pad===te||n.pad===C?.source)?C?.wire:void 0,A=k?k.wire[k.end==="a"?"b":"a"]:M?{device:n.device,pad:te}:n;e.pointerType!=="touch"&&(x.value=null,h.value.setPointerCapture(e.pointerId)),y.value={pointerId:e.pointerId,origin:n,fixed:A,attachment:k,jumper:M,start:s,cursor:s,target:null,moved:!1}}function ki(e,n){if(!e.isPrimary||e.button!==0||re())return;h.value.setPointerCapture(e.pointerId);const o=nt(n.id)?.device,t=o?a.value.find(s=>s.id===o):void 0;Ee={pointerId:e.pointerId,device:n.id,origin:{x:n.x,y:n.y},mate:t?{device:t,origin:{x:t.x,y:t.y}}:void 0,start:ve(oe(e)),saved:!1}}function ft(e,n,o){const t=lt(n),s=e.attachment?.wire.id;return t&&vn(e.fixed,t,s)?t:e.fixed.pad==="xt60"||xe(a.value,e.fixed)?.rf?xn(e.fixed,o,s):null}function Ci(e){if(Ie.has(e.pointerId)&&Ie.set(e.pointerId,oe(e)),ae?.pointerId===e.pointerId&&!ut(e,ae.start)&&(ae=null),fe){if(fe.pointers.includes(e.pointerId)){const{center:M,distance:A}=pt(fe.pointers);sn(fe.scale*A/fe.distance,M,fe.origin)}return}if(ne?.pointerId===e.pointerId){const M=oe(e),A=M.x-ne.start.x,X=M.y-ne.start.y;if(!E.value&&Math.hypot(A,X)<$t)return;E.value=!0,Y.value={scale:ne.view.scale,offset:{x:ne.view.offset.x+A,y:ne.view.offset.y+X}};return}const n=y.value;if(n?.pointerId===e.pointerId){const M=ve(oe(e));n.moved||=e.pointerType==="touch"?!ae:Math.hypot(M.x-n.start.x,M.y-n.start.y)>=4,n.moved&&(x.value=null),n.cursor=M,n.target=ft(n,document.elementFromPoint(e.clientX,e.clientY),M);return}const o=Ee;if(o?.pointerId!==e.pointerId)return;const t=a.value.find(M=>M.id===o.device);if(!t)return;const s=ve(oe(e)),k=s.x-o.start.x,C=s.y-o.start.y;if(!o.saved){if(Math.hypot(k,C)<4)return;ue(),o.saved=!0}t.x=o.origin.x+k,t.y=o.origin.y+C,o.mate&&(o.mate.device.x=o.mate.origin.x+k,o.mate.device.y=o.mate.origin.y+C),S.value=wn(t,s,!0)}function Si(e){if(L.value&&q.value&&ne?.pointerId===e.pointerId&&!E.value){const t=oe(e);Math.hypot(t.x-ne.start.x,t.y-ne.start.y)<$t&&(J.value=!1)}const n=y.value;if(ae?.pointerId===e.pointerId&&ut(e,ae.start))et(ae.origin);else if(n?.pointerId===e.pointerId){const t=document.elementFromPoint(e.clientX,e.clientY),s=ve(oe(e)),k=lt(t);if(n.origin.pad==="xt60"&&n.attachment)(n.moved&&k?.pad!=="xt60"||!n.moved&&e.pointerType!=="touch")&&Te(n.attachment.wire.id);else if(e.pointerType!=="touch"&&k&&pe(n.origin,k.device,k.pad)&&Qe(k.pad)&&Math.hypot(s.x-n.start.x,s.y-n.start.y)*F.value.scale<4)Qn(k);else if(n.moved){const C=ft(n,t,s),M=n.attachment;C&&!M?mn(n.fixed,C):C&&M&&!pe(n.origin,C.device,C.pad)?pi(M,C):!C&&n.jumper&&!k?Te(n.jumper.id):!C&&M&&t===h.value&&Te(M.wire.id)}}const o=Ee;if(o?.pointerId===e.pointerId){const t=a.value.find(s=>s.id===o.device);if(t&&o.saved){const s=wn(t,ve(oe(e)),!0);s&&rt(t,s)}else t&&e.pointerType==="touch"&&An(t.id)}kn(e)}function kn(e){Ie.delete(e.pointerId),ae?.pointerId===e.pointerId&&(ae=null),fe?.pointers.includes(e.pointerId)&&(fe=null),ne?.pointerId===e.pointerId&&(ne=null,E.value=!1),y.value?.pointerId===e.pointerId&&(y.value=null),Ee?.pointerId===e.pointerId&&(Ee=null,S.value=null)}function Ge(){const e=y.value?.pointerId??ae?.pointerId;x.value=null,y.value=null,ae=null,e!==void 0&&h.value?.hasPointerCapture(e)&&h.value.releasePointerCapture(e)}function Ii(e,n){e.dataTransfer?.setData("text/plain",n)}function _i(e){const n=tn.find(C=>C.kind===e.dataTransfer?.getData("text/plain"));if(!n)return;const o=ve(oe(e)),t=ee[n.kind],s=Hn(n.kind,{x:o.x-t.width/2,y:o.y-t.height/2}),k=wn(s,o,!1);k&&rt(s,k)}return(e,n)=>{const o=Oi;return D(),O("main",{class:"simulator","aria-label":"接线模拟器",onPointerupCapture:T,onKeydownCapture:T,onKeydown:Ri(an,["esc"])},[$("div",{ref_key:"viewport",ref:h,class:Ve(["viewport",{panning:m(E),connecting:m(y)}]),style:Ce(m(Jt)),onPointerdownCapture:wi,onPointerdown:xi,onPointermove:Ci,onPointerup:Si,onPointercancel:kn,onLostpointercapture:Xe(kn,["self"]),onWheel:Xe(qt,["prevent"]),onDragover:n[0]||(n[0]=Xe(()=>{},["prevent"])),onDrop:Xe(_i,["prevent"])},[$("div",{ref_key:"board",ref:I,class:"board",style:Ce(m(Ft))},[(D(),O("svg",{class:"wires",viewBox:`0 0 ${m(Me).width} ${m(Me).height}`,"aria-label":"连接导线"},[n[9]||(n[9]=Ti('<defs data-v-e1430eb1><linearGradient id="wiring-ipex-metal" x2="0" y2="1" data-v-e1430eb1><stop stop-color="#fff0bb" data-v-e1430eb1></stop><stop offset=".48" stop-color="#cfac68" data-v-e1430eb1></stop><stop offset="1" stop-color="#927241" data-v-e1430eb1></stop></linearGradient><g id="wiring-ipex-plug" stroke-linejoin="round" data-v-e1430eb1><rect x="3" y="-1.9" width="5.8" height="3.8" rx="1.2" fill="#35383a" stroke="#202328" stroke-width=".7" data-v-e1430eb1></rect><path d="M3.4-2.5h3v5h-3" fill="#b59458" stroke="#78603a" stroke-width=".5" data-v-e1430eb1></path><path d="M-3.8-2.8-2-4h3.8L4-2.4v4.8L1.8 4H-2l-1.8-1.2Z" fill="url(#wiring-ipex-metal)" stroke="#80683e" stroke-width=".65" data-v-e1430eb1></path><circle r="2.55" fill="#dbc087" stroke="#fff1be" stroke-width=".6" data-v-e1430eb1></circle><path d="M-.9-1.1h1.6" stroke="#fff4cd" stroke-width=".65" stroke-linecap="round" data-v-e1430eb1></path></g></defs>',1)),(D(!0),O(ce,null,he(m(ni),t=>(D(),O("g",{key:t.id,"data-wire":t.id},[n[8]||(n[8]=$("title",null,"点击删除导线",-1)),m(un).has(t.id)?(D(),O("path",{key:0,d:bn(t),"stroke-width":4+6/m(F).scale,class:"wire-highlight"},null,8,_o)):de("",!0),$("path",{d:bn(t),class:"wire-hit",onClick:s=>Te(t.id)},null,8,Mo),$("path",{d:bn(t),style:Ce({stroke:ct(t)}),class:"wire-line"},null,12,$o)],8,Io))),128)),(D(!0),O(ce,null,he(m(Ae).values(),({wire:t,source:s})=>(D(),O("g",{key:t.id,"data-wire":t.id,class:"vcc-jumper"},[$("title",null,"点击取消 "+K(m(Ze)[s])+" 短接",1),m(un).has(t.id)?(D(),O("path",{key:0,d:We(t.a,t.b),"stroke-width":4+6/m(F).scale,class:"wire-highlight"},null,8,To)):de("",!0),$("path",{d:We(t.a,t.b),class:"wire-hit jumper-hit",onClick:k=>Te(t.id)},null,8,Eo),$("path",{d:We(t.a,t.b),class:"jumper-base"},null,8,Ro),$("path",{d:We(t.a,t.b),class:"jumper-line"},null,8,Do)],8,Po))),128)),(D(!0),O(ce,null,he(m(mi),t=>(D(),O("g",{key:t.antennaId,class:"coax-lead","data-wire":t.wireId},[t.wireId&&m(un).has(t.wireId)?(D(),O("path",{key:0,d:t.path,"stroke-width":3.6+6/m(F).scale,class:"wire-highlight"},null,8,Ao)):de("",!0),t.wireId?(D(),O("path",{key:1,d:t.path,class:"wire-hit",onClick:s=>t.wireId&&Te(t.wireId)},null,8,Vo)):de("",!0),$("path",{d:t.path,class:"coax-sheath"},null,8,No),$("path",{d:t.path,class:"coax-glint"},null,8,Lo),$("use",{href:"#wiring-ipex-plug",transform:t.plugTransform,class:"coax-plug"},null,8,zo)],8,Oo))),128)),m(ot)?(D(),O("path",{key:0,d:m(ot),class:"jumper-line"},null,8,Bo)):m(st)?(D(),O("path",{key:1,d:m(st),style:Ce({stroke:m(yi)}),class:"wire-line wire-preview"},null,12,Uo)):de("",!0)],8,So)),(D(!0),O(ce,null,he(m(a),t=>(D(),O("div",{key:t.id,class:Ve(["device",[t.kind,{"toolbar-open":m(we)===t.id}]]),"data-device-id":t.id,style:Ce(fi(t))},[$("button",{type:"button",class:"device-body","aria-label":m(Q)(t.kind).name,"aria-controls":`device-tools-${t.id}`,"aria-keyshortcuts":"Space",onPointerdown:s=>ki(s,t),onClick:s=>s.detail===0&&An(t.id)},[$("img",{src:m(Zi)(t),class:"board-illustration",alt:"",draggable:"false"},null,8,Xo),(D(!0),O(ce,null,he(m(ee)[t.kind].indicators,(s,k)=>(D(),O("span",{key:s.label,class:Ve(["board-indicator",{lit:m(w).get(t.id)?.has(s.id)}]),style:Ce({left:`${s.x}px`,top:`${s.y}px`,width:`${s.width}px`,height:`${s.height}px`,"--led-color":s.color,"--strip-delay":s.id==="strip"?`${k*150}ms`:void 0}),"data-indicator":s.id,role:"img","aria-label":`${m(Q)(t.kind).name} ${s.label} 指示灯${m(w).get(t.id)?.has(s.id)?"亮起":"熄灭"}`},null,14,jo))),128))],40,Go),$("div",{id:`device-tools-${t.id}`,class:"device-controls"},[$("div",{class:"toolbar device-toolbar",role:"group","aria-label":`${m(Q)(t.kind).name} 工具栏`},[$("button",{class:"tool-button","aria-label":`旋转 ${m(Q)(t.kind).name} 90°`,title:"顺时针旋转 90°（空格键）",onClick:s=>Kn(t)},[H(o,{name:"mdi:rotate-right","aria-hidden":"true"})],8,qo),$("button",{class:"tool-button","aria-label":`左右镜像 ${m(Q)(t.kind).name}`,"aria-pressed":!!t.mirrored,title:"左右镜像",onClick:s=>ci(t)},[H(o,{name:"mdi:flip-horizontal","aria-hidden":"true"})],8,Ho),$("button",{class:"tool-button","aria-label":`删除 ${m(Q)(t.kind).name}`,title:"删除配件",onClick:s=>li(t.id)},[H(o,{name:"mdi:trash-can-outline","aria-hidden":"true"})],8,Ko)],8,Jo)],8,Fo),(D(!0),O(ce,null,he(gi(t),s=>(D(),O("button",{key:s.id,class:Ve(["pad",[m(ee)[t.kind].pads[s.id]?.side,{active:pe(m(y)?.origin??m(x),t.id,s.id),connected:m(ye).has(m(V)({device:t.id,pad:s.id})),target:pe(m(y)?.target??m(S),t.id,s.id),"rf-port":s.rf,"rf-plug":s.rf?.role==="plug","rf-lifted":s.rf?.role==="plug"&&m(y)?.moved&&pe(m(y).origin,t.id,s.id),"xt60-port":s.kind==="xt60","jumper-pad":m(Qe)(s.id),"issue-pad":m(Ht).has(m(V)({device:t.id,pad:s.id}))}]]),style:Ce(hi(t,s.id)),"data-device":t.id,"data-pad":s.id,title:s.kind==="xt60"?"拖动对接 XT60，点击可拔下":t.kind==="fc"?ui(t.id,s.id):void 0,"aria-pressed":m(ge)(s.id)?m(Ae).get(t.id)?.source===s.id:void 0,"aria-label":`${m(Q)(t.kind).name} ${s.label} ${s.rf?s.rf.role==="plug"?"插头":"接口":s.kind==="xt60"?"接口":t.kind==="motor"||t.kind==="power-lead"||t.kind==="capacitor"?"线头":"焊盘"}${s.area?` · ${s.area}`:""}`,onPointerdown:Xe(k=>bi(k,{device:t.id,pad:s.id}),["stop"]),onClick:k=>k.detail===0&&et({device:t.id,pad:s.id})},[...n[10]||(n[10]=[$("span",{class:"pad-ring"},null,-1)])],46,Yo))),128))],14,Wo))),128))],4)],38),$("div",Zo,[$("div",Qo,[$("button",{class:"tool-button","aria-expanded":m(q),"aria-controls":"wiring-parts",onClick:n[1]||(n[1]=t=>J.value=!m(q))},[H(o,{name:"mdi:plus","aria-hidden":"true"}),n[11]||(n[11]=Re(" 配件 ",-1))],8,ea),$("button",{class:"tool-button","aria-label":"撤销",title:"撤销",disabled:!m(u).length,onClick:si},[H(o,{name:"mdi:undo","aria-hidden":"true"})],8,na),$("button",{class:"tool-button","aria-label":"清空画布",title:"清空画布",disabled:!m(a).length,onClick:di},[H(o,{name:"mdi:trash-can-outline","aria-hidden":"true"})],8,ta),$("button",{class:"tool-button",onClick:ri},"完整接线示例"),$("div",{class:"file-actions",onFocusout:ti},[$("button",{ref_key:"fileButton",ref:Dn,class:"tool-button file-toggle","aria-expanded":m(be),"aria-controls":"wiring-file-actions",onClick:n[2]||(n[2]=t=>be.value=!m(be))},[H(o,{name:"mdi:file-outline","aria-hidden":"true"}),n[12]||(n[12]=Re(" 文件 ",-1))],8,ia),m(be)?(D(),O("div",oa,[$("button",{class:"tool-button",disabled:m(Be),onClick:ii},[H(o,{name:"mdi:folder-open-outline","aria-hidden":"true"}),n[13]||(n[13]=Re(" 导入 JSON ",-1))],8,aa),$("button",{class:"tool-button",onClick:n[3]||(n[3]=t=>qn("json"))},[H(o,{name:"mdi:code-json","aria-hidden":"true"}),n[14]||(n[14]=Re(" 导出 JSON ",-1))]),$("button",{class:"tool-button",disabled:!m(a).length||m(Ue),onClick:n[4]||(n[4]=t=>qn("png"))},[H(o,{name:"mdi:image-outline","aria-hidden":"true"}),Re(" "+K(m(Ue)?"正在生成图片":"导出 PNG"),1)],8,ra)])):de("",!0),$("input",{ref_key:"diagramInput",ref:On,type:"file",accept:".json,application/json",hidden:"",onChange:oi},null,544)],32)]),m(q)?(D(),O("div",da,[(D(!0),O(ce,null,he(m(tn),t=>(D(),O("button",{key:t.kind,class:"part",draggable:"true",onClick:s=>Hn(t.kind),onDragstart:s=>Ii(s,t.kind)},[$("span",{class:Ve(["part-icon",t.kind])},[$("img",{src:m(ee)[t.kind].illustration,class:"board-illustration",alt:"",draggable:"false"},null,8,ca)],2),Re(" "+K(t.name)+" ",1),H(o,{name:"mdi:plus",class:"part-add","aria-hidden":"true"})],40,sa))),128))])):de("",!0)]),m(Fn)?(D(),O("div",la,[Re(K(m(Fn))+" ",1),m(x)?(D(),O("button",{key:0,type:"button",onClick:Ge},"取消")):de("",!0)])):de("",!0),$("div",ua,[m(qe).length?(D(),O("button",{key:0,type:"button",class:"antenna-alert-button power-fault-button",onClick:fn},[H(o,{name:"mdi:alert-outline","aria-hidden":"true"}),$("span",null,K(zn[Wn(m(qe))].title)+"。点击查看接线问题。",1)])):m(g).antennaWarnings.length?(D(),O("button",{key:1,type:"button",class:"antenna-alert-button",onClick:fn},[H(o,{name:"mdi:alert-outline","aria-hidden":"true"}),$("span",null,"有 "+K(m(g).antennaWarnings.length)+" 个设备已通电但天线未接全，射频功放可能烧毁。",1)])):de("",!0)]),$("div",pa,[$("button",{ref_key:"checkButton",ref:Ln,type:"button",class:"toolbar check-button","aria-label":`${m(ln)}，${m(r).length} 根线`,"aria-expanded":m(le),title:m(ln),"aria-controls":"wiring-check",onClick:fn},[H(o,{name:"mdi:clipboard-check-outline","aria-hidden":"true"}),$("span",ha,K(m(ln)),1),$("span",ga,K(m(r).length)+" 根线",1)],8,fa),m(le)?(D(),O("section",va,[$("div",ma,[$("strong",ya,K(m(Qt)),1),$("button",{class:"tool-button",type:"button","aria-label":"关闭检查结果",onClick:jn},[H(o,{name:"mdi:close","aria-hidden":"true"})])]),(D(!0),O(ce,null,he(m(Zt),t=>(D(),O(ce,{key:t.severity},[t.issues.length?(D(),O("div",{key:0,class:Ve(["check-group",t.severity])},[$("h3",null,K(t.label)+"（"+K(t.issues.length)+"）",1),$("ul",null,[(D(!0),O(ce,null,he(t.issues,(s,k)=>(D(),O("li",{key:`${s.code}:${k}`},[s.endpoints.length?(D(),O("button",{key:0,type:"button",class:"check-issue",onClick:C=>ei(s)},K(s.message),9,xa)):(D(),O("span",wa,K(s.message),1))]))),128))])],2)):de("",!0)],64))),128))])):de("",!0)]),$("div",ba,[$("button",{class:"tool-button","aria-label":"缩小",title:"缩小",disabled:m(F).scale<=It,onClick:n[5]||(n[5]=t=>Nn(1/Mt))},"−",8,ka),$("output",Ca,K(Math.round(m(F).scale*100))+"%",1),$("button",{class:"tool-button","aria-label":"放大",title:"放大",disabled:m(F).scale>=_t,onClick:n[6]||(n[6]=t=>Nn(Mt))},"+",8,Sa),$("button",{class:"tool-button fit-button","aria-label":"适应画布",title:"适应画布",onClick:dn},[H(o,{name:"mdi:fit-to-screen-outline","aria-hidden":"true"})]),$("button",{class:"tool-button theme-button",type:"button","aria-label":"暗色模式","aria-pressed":m(f),title:m(f)?"切换为亮色":"切换为暗色",onClick:n[7]||(n[7]=t=>l.value=m(f)?"light":"dark")},[H(o,{name:m(f)?"mdi:white-balance-sunny":"mdi:weather-night","aria-hidden":"true"},null,8,["name"])],8,Ia)]),(D(),vt(Ei,{to:"body"},[m(Se)?(D(),vt(ji,{key:m(Se).id,points:m(Se).points,title:m(Se).title,advice:m(Se).advice},null,8,["points","title","advice"])):de("",!0)]))],32)}}}),Ra=Tt(Ma,[["__scopeId","data-v-e1430eb1"]]);export{Ra as default};
