const e=require("webpack-merge"),{GetDevEntry:t}=require("./entry"),{GetDevOptimize:r}=require("./optimze"),{GetDevOutput:o}=require("./output"),u=require("./webpack.base");module.exports=function(p){return e(u(p),{devtool:"cheap-module-eval-source-map",entry:t(p.port),mode:"development",optimization:r(),output:o(p.port)})};