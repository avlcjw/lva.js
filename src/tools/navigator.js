/**
 * Created by Administrator on 2017/5/22.
 */
let browser = navigator.appName;
let b_version = navigator.appVersion;
let version = b_version.split(";");
let trim_Version = version[1].replace(/[ ]/g, "");
let ie = '';
if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE6.0") {
  ie = "IE6";
}
else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE7.0") {
  ie = "IE7";
}
else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE8.0") {
  ie = "IE8";
}
else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE9.0") {
  ie = "IE9";
}

export default ie;
