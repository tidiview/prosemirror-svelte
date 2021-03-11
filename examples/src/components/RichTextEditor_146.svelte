<script>
  import { onMount } from "svelte";

  import ProsemirrorEditor from "../../../ProsemirrorEditor.svelte";
  import { createExtendedThreeRichTextEditor, clear, toHTML, toPlainText, toJSON } from "../../../state";

  const html = `            
<div id="bubblecontainer" class="curtain-image flush-top-curtain">
      <div class="curtain-image-image">
      <div class="curtain-meta">
    
        <svg
    viewBox="0 0 200 200"
    class="svg"
    id="curtain-photo"
    version="1.1"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <symbol id="s-mask-circles">
        <g stroke="#CCC" stroke-width="9" fill="white">
            <circle cx="100" cy="100" r="92" />
        </g>
      </symbol>
    
      <mask id="mask-circles">
        <use xlink:href="#s-mask-circles" />
      </mask>
    
      <symbol id="s-flower-m">
        <image xlink:href="/user/themes/mytheme/images/DSC01134-new.jpg" width="200" height="200" />
      </symbol>
    
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-mask-circles"></use>
    
      <g mask="url(#mask-circles)">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-flower-m"></use>
      </g>
    </svg>
            <h1 id="landing-curtain-h1" title="☆ ようこそ、私のホームページーに！" lang="ja"><svg viewBox="0 0 460 200" class="svg" id="curtain-ja" xmlns="http://www.w3.org/2000/svg" ><defs>
    <path d="M -13.337038,150.62517 C 38.67741,136.62128 88.559766,137.55051 261.40595,149.29147 391.05123,158.0979 435.4543,134.62073 500.13893,123.9511"/></defs>
    <path style="fill:none;fill-rule:evenodd;stroke:#fff;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 0.7172803,81.142615 c 49.3470397,-6.00167 65.1846257,-5.874 221.3948297,5.33482 104.9224,7.52868 173.3815,-12.00333 238.06613,-22.67296"/>
    <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 28.846084,28.426255 7.179568,-26.398072 0.604812,-0.02819 9.603969,25.615772 27.065342,-1.26153 0.110839,0.75249 -21.281177,16.44815 9.978452,25.52255 -0.504544,0.55388 -22.833267,-15.22537 -21.318017,17.28329 -0.553877,-0.50455 7.561099,-26.34008 -22.7189037,-14.39727 0.040363,-0.75954 27.0653417,-1.26153 z m 2.250749,2.77419 -14.591093,0.6801 -7.6533717,-0.0221 0.00705,0.1512 6.9258697,3.92006 12.026731,7.6979 -3.785835,13.05664 -2.791165,8.38856 0.154726,0.0686 6.773701,-5.84663 10.43749,-8.51767 11.184543,7.50985 7.288181,5.19119 0.147679,-0.0826 -3.559362,-8.09257 -4.98394,-12.64787 11.258535,-8.78324 6.5312,-4.54731 -0.007,-0.1512 -7.693735,0.73744 -14.515491,0.67658 -5.105352,-13.62717 -2.390101,-7.389409 -0.151203,0.007 -1.767982,7.583219 -3.740025,14.03946 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 132.18145,57.759275 q 0.0325,-0.52878 0.0545,-2.11979 0.10219,-1.6619 0.16722,-2.71947 -3.50397,-0.97373 -7.4321,-1.21527 -5.81665,-0.35767 -9.25657,1.32647 -3.35974,1.61325 -3.55484,4.78597 -0.19509,3.17272 2.71971,5.09596 2.99499,1.85235 8.50948,2.19143 8.3095,0.51096 8.79258,-7.3453 z m 6.99138,-28.61166 -0.0325,0.52879 q -0.35767,5.81665 -0.41979,19.1583 13.29422,4.53297 22.9918,14.53177 l -4.05453,5.5135 q -7.93105,-9.13191 -19.09154,-13.83698 -0.0998,4.0885 -0.16013,5.07053 -0.31587,5.13678 -3.99513,8.24691 -3.59908,3.03923 -10.77546,2.59795 -8.38505,-0.51559 -13.18959,-3.76826 -4.80454,-3.25267 -4.419,-9.52257 0.33908,-5.51448 5.46756,-8.76298 5.12848,-3.2485 14.57109,-2.66787 3.17272,0.1951 6.46865,0.85272 0.15746,-12.42587 0.48726,-17.78927 0.65959,-10.72681 0.78379,-13.979716 0.18336,-5.448236 -0.13518,-7.666793 l 7.40301,0.455214 q -0.60189,2.389439 -1.07348,7.592472 l -0.47844,7.780713 q 14.52709,0.51415 22.75053,-0.0418 l -0.13104,5.83058 q -11.39152,0.28528 -22.96786,-0.12325 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 229.77006,48.863415 q 0.30652,-4.83404 -3.12744,-8.0852 -3.35363,-3.32191 -9.24512,-3.69548 -2.49256,-0.15805 -4.99948,-0.0895 -2.43139,0.0733 -5.11332,0.50997 -2.6064,0.44141 -3.98513,0.65733 -1.3032,0.22071 -4.07503,0.87914 -2.76704,0.5829 -2.9229,0.64886 -1.22766,0.22549 -6.5591,1.78333 l -1.51363,-7.22453 q 2.81384,-0.12492 7.02078,-0.69235 0.23138,-0.0612 4.44311,-0.70413 4.21652,-0.7185 6.12876,-0.97643 1.98778,-0.25313 5.71758,-0.47165 3.73459,-0.29404 6.83139,-0.0977 8.38405,0.53163 13.38392,5.3988 5.0754,4.87196 4.57251,12.80281 -0.75672,11.93404 -10.7431,18.7327 -9.90605,6.72792 -25.76516,8.07322 l -3.25196,-6.12138 q 14.84846,-0.95437 23.67202,-6.15838 8.90389,-5.27476 9.5313,-15.16944 z m -31.2678,-30.72433 1.35548,-5.82923 q 5.88081,1.737935 16.01057,3.441947 10.20529,1.708803 16.31858,2.172273 l -1.28474,5.90955 q -18.20688,-2.29201 -32.39989,-5.69454 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 266.92578,28.541205 -0.21076,-6.35393 q 8.12631,0.71488 20.30467,0.31092 9.60654,-0.31865 20.61514,-1.74395 l 0.21076,6.35392 q -12.52646,1.32421 -20.62016,1.59268 -10.66552,0.35377 -20.29965,-0.15964 z m -2.37909,24.15953 6.374,0.39438 q -1.40783,5.49891 -1.29994,8.75152 0.14803,4.46287 4.85252,7.03293 4.70198,2.49442 13.62773,2.19835 16.79253,-0.557 26.14992,-3.82067 l 0.29644,6.65399 q -9.82379,2.90051 -26.08682,3.43995 -11.80015,0.39141 -18.35518,-3.17742 -6.55502,-3.56883 -6.79087,-10.67918 -0.11039,-3.32824 1.2322,-10.79385 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 340.69357,20.333575 -1.22298,-6.246018 q 2.81457,-0.107238 6.09834,-0.665835 2.99523,-0.439742 11.62645,-2.089399 8.70609,-1.66065 11.57148,-2.463803 2.43809,-0.58743 4.00851,-1.353455 l 4.54243,3.846308 q -1.98465,1.591788 -3.62581,3.439126 -1.65215,1.772456 -9.28296,10.236276 -7.6308,8.46382 -10.66856,11.74011 21.97371,-5.59738 35.67691,-7.6092 l 0.8465,5.76582 q -12.59305,1.23688 -19.18942,3.19975 -5.58101,1.58432 -9.45822,6.43726 -3.80234,4.84195 -3.04378,10.00874 1.38519,9.43499 14.66731,9.24437 5.65112,-0.0647 10.97659,-1.30553 l -0.36051,6.402 q -13.8399,2.64385 -21.87974,-0.536 -7.96496,-3.19084 -9.25121,-11.95191 -0.64862,-4.41797 1.47543,-8.70754 2.18794,-4.37545 5.26075,-6.89195 -12.06267,2.7654 -26.76194,7.3713 l -1.38166,-5.76376 q 1.40075,-0.35864 12.80941,-3.41049 6.93218,-6.44888 22.00897,-24.114336 -0.66293,0.173823 -9.19728,1.962246 -8.54534,1.71355 -10.47026,2.14914 -0.66293,0.17382 -1.92491,0.43559 -1.1871,0.25078 -2.14956,0.46858 -0.96246,0.2178 -1.70028,0.40261 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 106.36006,135.12903 -2.01661,1.98241 q -0.78613,-1.50389 -3.41796,-4.85351 l -2.871098,14.42382 -2.563476,0 3.076172,-15.38085 q -4.067383,6.28906 -8.100586,9.98047 -0.102539,-0.68359 -0.888672,-2.46093 2.255859,-1.87989 4.819336,-5.02443 2.597656,-3.14453 4.443359,-6.28905 l -6.289062,0 0.512695,-2.49512 6.767578,0 1.127934,-5.67383 q -3.452153,0.6836 -6.220707,1.05957 -0.03418,-1.02539 -0.410157,-2.05078 9.467774,-1.46972 13.774414,-3.28125 l 1.57227,1.91406 q -2.7002,1.02539 -6.04981,1.81152 l -1.23047,6.2207 6.11817,0 -0.5127,2.49512 -6.11816,0 -0.41016,2.08496 q 0.75195,0.75195 2.49512,2.76856 1.77734,2.0166 2.39258,2.76855 z m 14.28711,10.76659 -2.90528,0.88867 q 0.0342,-1.33299 -0.13672,-3.52049 -9.39941,1.26463 -16.26953,2.01659 l -0.10254,-2.7002 q 1.60645,-0.1709 3.38379,-0.30761 2.63184,-5.50293 5.63965,-13.02247 3.04199,-7.5537 5.12695,-13.70604 l 2.80274,0.51269 q -5.02442,13.77441 -10.86914,25.94238 1.29883,-0.13671 4.68261,-0.47852 3.38379,-0.37597 5.2295,-0.54687 -0.6836,-4.51171 -1.98242,-8.37403 l 2.59765,-0.75194 q 1.19629,3.41796 1.98242,7.34863 0.78614,3.93067 0.82032,6.69921 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 132.84931,139.23059 q 1.23047,0 2.97364,-1.98243 1.77734,-2.0166 3.8623,-6.18652 2.15332,-4.23828 3.79395,-9.33106 -3.24707,0.41016 -6.15235,2.22168 -2.87109,1.81154 -4.58007,4.2041 -1.70899,2.3584 -2.1875,4.75098 -0.61524,3.00781 0.17089,4.68262 0.82032,1.64062 2.11914,1.64062 z m 7.96387,5.81054 -1.09375,-2.63183 q 1.33301,-0.0684 3.04199,-0.41016 3.86231,-0.82031 6.93848,-3.41796 3.07617,-2.63184 3.89648,-6.83594 0.82032,-4.06738 -1.09375,-6.87012 -1.87988,-2.83691 -6.11816,-3.17871 -1.91406,5.63965 -4.0332,9.94629 -5.36621,10.80078 -10.28809,10.80078 -2.42676,0 -3.79394,-2.59765 -1.36719,-2.59766 -0.54688,-6.69922 1.16211,-5.70801 6.45996,-9.87793 5.29785,-4.2041 11.58692,-4.2041 5.94726,0 8.88671,3.6914 2.93946,3.65723 1.84571,9.05762 -1.09375,5.46875 -5.22949,8.95508 -4.13575,3.45215 -10.45899,4.27246 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 169.79756,129.6261 2.1875,1.19628 q -1.50391,2.15332 -4.10157,5.02442 -2.59765,2.87109 -4.51171,4.54589 l -2.11915,-1.64061 q 2.01661,-1.53809 4.51172,-4.23828 2.5293,-2.7002 4.03321,-4.8877 z m 20.06347,-4.23828 -9.29687,0 -3.41797,16.98729 q -0.54688,2.76856 -3.55469,2.76856 -2.93945,0 -4.92187,-0.23926 l 0.34179,-2.76855 q 2.01661,0.37597 3.89649,0.37597 1.36719,0 1.64062,-1.33301 0.41016,-1.87988 3.14453,-15.51757 l 0.0684,-0.27344 -9.70703,0 q -1.74316,0 -3.04199,0.13672 l 0.58105,-2.97363 q 1.43555,0.20507 2.93946,0.20507 l 9.74121,0 0.71777,-3.58886 q 0.30762,-1.46973 0.23926,-2.49512 l 3.28125,0 q -0.41016,0.95704 -0.71777,2.49512 l -0.71778,3.58886 9.2627,0 q 1.40137,0 2.90527,-0.1709 l -0.58105,2.90528 q -1.40137,-0.10254 -2.80274,-0.10254 z m -5.63965,5.5371 2.63184,-1.29882 q 1.02539,1.57227 2.25586,4.30663 1.23047,2.73439 1.94824,4.85352 l -2.83691,1.43555 q -0.61524,-2.1875 -1.81153,-4.92187 -1.1621,-2.76856 -2.1875,-4.375 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 198.26924,132.39465 0.68359,-3.41797 q 2.63184,0.1709 4.85352,0.1709 l 19.1748,0 q 1.8457,0 3.82813,-0.1709 l -0.6836,3.41797 q -3.38379,-0.1709 -3.72558,-0.1709 l -19.20899,0 q -3.07617,0 -4.92187,0.1709 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 260.03193,143.98156 -3.17871,1.33301 q -0.27344,-1.77735 -0.99121,-4.58008 -12.9541,1.57226 -22.28516,2.39258 -0.51269,0.0342 -1.60644,0.20508 -1.09375,0.17089 -1.40137,0.20507 l 0.1709,-3.28125 q 1.09375,0.0342 3.24707,-0.0342 0.51269,-0.0342 1.74316,-0.10254 1.94825,-3.24707 5.36621,-9.70703 3.45215,-6.49413 5.0586,-9.7412 0.78613,-1.74316 1.36719,-3.34961 l 3.34961,0.6836 q -1.50391,2.59765 -1.84571,3.24707 -7.58789,14.45799 -9.98047,18.59374 6.87012,-0.61523 16.03028,-1.74317 -1.50391,-4.92187 -2.80274,-7.17773 l 2.8711,-1.19629 q 1.333,2.63184 2.83691,7.07519 1.50391,4.44336 2.05078,7.17774 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 292.29756,121.32044 q -0.88868,0.75194 -1.09375,1.81152 -0.20508,1.05957 0.37597,1.81152 0.61524,0.71778 1.70899,0.71778 1.05957,0 1.94824,-0.71778 0.88867,-0.75195 1.09375,-1.81152 0.20508,-1.05957 -0.37598,-1.81152 -0.58105,-0.75196 -1.64062,-0.75196 -1.09375,0 -2.0166,0.75196 z m -2.15332,4.81932 q -0.99121,-1.23046 -0.64942,-3.00781 0.37598,-1.77734 1.87988,-3.00781 1.50391,-1.26465 3.28125,-1.26465 1.77735,0 2.73438,1.26465 0.99121,1.23047 0.61523,3.00781 -0.34179,1.77734 -1.81152,3.00781 -1.46973,1.23047 -3.24707,1.23047 -1.77734,0 -2.80273,-1.23047 z m -22.01172,11.34766 -2.05078,-2.56348 q 1.40136,-1.05957 2.90527,-2.32422 0.92285,-0.75194 2.39258,-2.15331 1.46972,-1.43554 3.34961,-3.28125 1.87988,-1.8457 2.83691,-2.76855 1.74317,-1.70899 3.00781,-1.77735 1.26465,-0.10253 2.8711,1.43555 1.81152,1.77735 5.81054,7.24609 4.20411,5.74219 6.5625,9.36523 l -2.73437,2.46094 q -1.91406,-3.28125 -6.01563,-9.29688 -3.89648,-5.57129 -5.40039,-7.10936 -0.92285,-0.92285 -1.5039,-0.8545 -0.58106,0.0342 -1.70899,1.12793 -1.09375,1.05957 -3.99902,3.99903 -2.87109,2.93944 -3.79395,3.82812 -0.23925,0.27344 -2.52929,2.66602 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 303.26924,132.39465 0.68359,-3.41797 q 2.63184,0.1709 4.85352,0.1709 l 19.1748,0 q 1.8457,0 3.82813,-0.1709 l -0.6836,3.41797 q -3.38379,-0.1709 -3.72558,-0.1709 l -19.20899,0 q -3.07617,0 -4.92187,0.1709 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 360.55439,118.85949 2.08496,-0.85449 q 1.33301,2.59766 2.15332,5.43457 l -2.15332,0.88867 q -0.95703,-3.34961 -2.08496,-5.46875 z m 4.8877,-1.6748 2.11914,-0.85449 q 1.05957,1.84571 2.29004,5.36621 l -2.1875,0.88867 q -0.95703,-3.07617 -2.22168,-5.40039 z m -19.6875,2.63184 2.05078,-2.32422 q 3.28125,2.11914 6.59668,4.92188 l -2.11914,2.42675 q -2.59766,-2.39258 -6.52832,-5.02441 z m -7.17774,25.53222 -1.05957,-2.83692 q 6.66504,-1.09375 12.54395,-4.06738 9.70703,-4.99023 15.82519,-12.85155 l 1.12793,2.90526 q -2.97363,3.52051 -7.14355,6.80176 -4.16992,3.24707 -8.85254,5.70801 -2.73438,1.46972 -6.2207,2.66601 -3.48633,1.16211 -6.22071,1.67481 z m 0.30762,-17.60254 2.05078,-2.39258 q 4.27246,2.66602 6.76758,4.7168 l -2.11914,2.46093 q -1.19629,-1.02539 -3.28125,-2.49511 -2.08496,-1.5039 -3.41797,-2.29003 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 373.26924,132.39465 0.68359,-3.41797 q 2.63184,0.1709 4.85352,0.1709 l 19.1748,0 q 1.8457,0 3.82813,-0.1709 l -0.6836,3.41797 q -3.38379,-0.1709 -3.72558,-0.1709 l -19.20899,0 q -3.07617,0 -4.92187,0.1709 z" />
     <path style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:0" d="m 413.90888,117.62903 3.11036,0.23926 q -0.54688,0.95703 -1.12793,2.3584 -3.31543,8.20311 -4.34082,13.26171 -0.5127,2.52929 -0.6836,4.75097 1.29883,-2.25586 2.90528,-4.95605 l 1.29882,1.09375 q -3.14453,5.57129 -3.99902,7.79297 -0.30762,0.78613 -0.47852,1.53808 l -0.13671,1.23047 -2.56348,0.1709 q -0.3418,-4.5459 0.95703,-11.14258 0.37598,-1.77734 1.02539,-4.0332 0.64942,-2.25586 1.12793,-3.65723 0.47852,-1.43555 1.26465,-3.62305 0.82031,-2.22168 0.92285,-2.56347 0.61524,-1.91406 0.71777,-2.46093 z m 5.19532,16.78222 2.46093,0.27343 q -0.78613,1.81153 -1.05957,3.17872 -0.64941,3.11035 5.16114,3.11035 4.34082,0 8.75,-0.92285 l -0.54688,2.93945 q -3.89648,0.71777 -8.78418,0.71777 -8.4082,0 -7.34863,-5.19531 0.30762,-1.50391 1.36719,-4.10156 z m 3.38379,-11.00585 0.54687,-2.8711 q 2.90527,0.44433 7.14356,0.41016 4.27246,-0.0342 7.10937,-0.41016 l -0.58105,2.8711 q -2.83692,0.27343 -7.14356,0.27343 -4.27246,0 -7.07519,-0.27343 z" />
    </svg></h1>    
<p id="curtain-button"><a href="/en" class="curtain-button-side" rel="nofollow bookmark"><span title="英語"><ruby lang="en">english<rt lang="fr">anglais</rt></ruby></span></a> <a class="curtain-button-center" href="#topofpage" rel="nofollow"><ruby lang="ja"><span title="japanese">日本語</span><rt lang="fr">japonais</rt></ruby></a> <a class="curtain-button-side" href="/fr" rel="nofollow bookmark"><ruby lang="fr"><span title="french">français</span><rt lang="ja">フランス語</rt></ruby></a></p>
    
<div style="text-align:center;width:42px;height:64px;margin:auto;">
<a href="#topofpage" class="topofpage" rel="nofollow"><svg class="svg-topofpage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 64"><path d="M3.55 16.627l17.413 19.215.037-.04.037.04L38.45 16.627 21 35.764 3.55 16.627z" fill="none" stroke="#fff" opacity="0.6" stroke-width="5.145" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
</div>
</div>
</div></div></div>
<span id="topofpage" class="curtain-content"></span>
<div id="ブログ"></div>
<div id="curtain-blogue" class="modular-row callout" style="width: 100%;margin-top: -0.8rem;margin-left: 0;margin-bottom: 0;margin-right:0;padding-top: 6vh;padding-left: 0;padding-bottom: 2vh;padding-right: 0;background-color: #000;align-items: center;justify-content: center;text-align: center;">
<p style="line-height: 5vh;font-size: 4vh; text-align: center;max-height: 5vh;min-height: 3vh;max-width: 25vw;min-width: 15vw;margin-top: 3vh;margin-right: auto;margin-bottom: 2vh;margin-left: auto;display: block;color:#E7E7E8;">とは、</p>
<a href= "/blog/ja" rel="bookmark preload"><p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 6vh;border: none; background-color: crimson;border-radius: 50%;color:#E7E7E8;"> </p></a>
</div>
<div id="ドックス"></div>
<div id="curtain-docs" class="modular-row showcase" style="
    width: 100%;
    margin-top: -0.8rem;
    margin-left: 0;
    margin-bottom: 0;
    margin-right:0;
    padding-top: 5vh;
    pading-left: 0;
    padding-bottom: 2vh;
    padding-right: 0;
    background-color: #efc94d;
    align-items: center;
    justify-content: center;
    text-align: center;">
    
    <a href="/docs/ja" rel="bookmark preload"><p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#efc94d;"> </p></a>
</div>
<div id="プロフィール"></div>
<div id="curtain-profil" class="modular-row showcase" style="
    width: 100%;
    margin-top: -0.8rem;
    margin-left: 0;
    margin-bottom: 0;
    margin-right:0;
    padding-top: 5vh;
    pading-left: 0;
    padding-bottom: 2vh;
    padding-right: 0;
    background-color: #B7E2E6;
    align-items: center;
    justify-content: center;
    text-align: center;">
    
    <a href= "/profile/ja" rel="author me bookmark"><p style="max-width: 7vh;height: 7vh;line-height: 6.75vh;font-size: 4vh;text-align: center;margin-left: auto;margin-right: auto;margin-top: 2vh;border: none; background-color: crimson;border-radius: 50%;color:#E7E7E8;"> </p></a>
</div>
<div id="リアルタイムスケジュール"></div>
<div id="御問い合わせ"></div>
<div id="curtain-contact" class="modular-row showcase" style="padding-bottom: 20rem;">
<h4>御問い合わせ</h4>
<p>問い合わせるには、以下のフォームを御記入を：</p>
<form name="contact2"
          action="/ja/home"
          method="POST"
          id="contact2"            class=" "
          >
<div class="form-field   ">
                                        <div class="form-label ">
                        <label class="inline" for="name"  >
                                                                        名前
                                                    <span class="required">*</span>
                                            </label>
                    </div>
                            <div class="form-data "
                                    data-grav-field="text"
                    data-grav-disabled="true"
                    data-grav-default="null"
                                >
                                                                <div class="form-input-wrapper  ">
                                                            <input
                                                                    name="data[name]"
                                    value=""
                                                                        type="text"
                                            class="curtain-contact-form"                                     id="name"                                                                                                             placeholder="御名前を …"                                                                                                                                                autocomplete="on"                                                                        required="required"                                                                                                        
                                />
</div></div></div>
<div class="form-field   ">
<div class="form-label ">
<label class="inline" for="email"  >
                                                                        メールアドレス
                                                    <span class="required">*</span>
                                            </label>
                    </div>
                            <div class="form-data "
                                    data-grav-field="email"
                    data-grav-disabled="true"
                    data-grav-default="null"
                                >
                                                                <div class="form-input-wrapper  ">
                                                            <input
                                                                    name="data[email]"
                                    value=""
                                                                        type="email"
                                                class="curtain-contact-form"                                     id="email"                                                                                                             placeholder="メールアドレスを …" required="required"                     
                                />
    </div>
                </div>
                </div>
                  
        <div class="form-field   ">
                                        <div class="form-label ">
                        <label class="inline" for="message"  >
                                                                        伝言
                                                    <span class="required">*</span>
                                            </label>
                    </div>
                            <div class="form-data "
                                    data-grav-field="textarea"
                    data-grav-disabled="true"
                    data-grav-default="null"
                                >
                                            <div class="form-textarea-wrapper ">
            <textarea
                            name="data[message]"
                                            class="curtain-contact-form"                 id="message"                                                 placeholder="御作文を …"                                                                                required="required"                                                                                        ></textarea>
        </div>
                                    
                </div>
                </div>
      
      <input type="hidden" name="__form-name__" value="contact2" />
      
        <div class="buttons">
      
                                <button
                                                    class="button "
                                    
                    type="submit"
    
                                >
                    認証
              </button>
                                                <button
                                                    class="button "
                
                    type="reset"

                                >
                    取り消し
              </button>
</div>
<input type="hidden" name="__unique_form_id__" value="Y7aFReCZnWvEJMxI6b9L" />  <input type="hidden" name="form-nonce" value="23783d35f144e9c6f9c368003ae8facd" />
    </form>
    </div>
`;


  let focusEditor;
  let showEditorState = true;
  let editorState = createExtendedThreeRichTextEditor(html);

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  function clearEditor(event) {
    editorState = clear(editorState);
    focusEditor();
  }

  function resetEditor(event) {
    editorState = createExtendedThreeRichTextEditor(html);
    focusEditor();
  }

  function showHtml(event) {
    alert(toHTML(editorState));
  }

  function showText(event) {
    alert(toPlainText(editorState));
  }

  onMount(() => focusEditor());

</script>

<ProsemirrorEditor
  {editorState}
  bind:focus={focusEditor}
  on:change={handleChange}
  placeholder="Go ahead and edit me!"/>

<div class="controls">
  <button on:click={clearEditor}>Clear</button>
  <button on:click={resetEditor}>Reset</button>
  <button on:click={showHtml}>Show HTML</button>
  <button on:click={showText}>Show Text</button>
</div>

<p>
  <label>Show serialized editor state
    <input type="checkbox" bind:checked={showEditorState}/>
  </label>
</p>

<p>
  information about html <a href='https://www.w3schools.com/tags/tag_ruby.asp' rel="nofollow external" target="_blank"><code>ruby</code></a> tag.
</p>

{#if showEditorState}
<pre>{JSON.stringify(toJSON(editorState), null, 2)}</pre>
{/if}