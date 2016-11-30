var ls = require('npm-remote-ls').ls;
var config = require('npm-remote-ls').config;
var http = require('request');
var q = require('q');


var sufix = "/blob/master/package.json";
var gitRepos = "https://api.github.com/NOUBISSI/testAngular";


config({
  development: false,
  // verbose: true,
  optional: false
});




console.log("noums");

console.log(gitRepos + sufix);

var options = {
  url: "https://raw.githubusercontent.com/NOUBISSI/testAngular/master/package.json" ,
  // url: "https://raw.githubusercontent.com/akveo/blur-admin/master/package.json",
  headers: {
    'User-Agent': 'request'
  }
};


const SIZE = 1000;

var graph = {
  "name": "flare",
  "children": []
};


var testjson = {
  "angular-chart.js@1.0.3": {
    "chart.js@2.3.0": {
      "chartjs-color@2.0.0": {
        "chartjs-color-string@0.4.0": {
          "color-name@1.1.1": {}
        },
        "color-convert@0.5.3": {}
      },
      "moment@2.15.2": {}
    },
    "angular@1.5.8": { "x": "y" }
  }
};




var json = {
  "js": {
    "art": {
      "color": {
        "js": {
          "name": {}
        },
        "convert": {}
      },
      "moment": {}
    },
    "ar": {}
  }
};



var ref1 ;
var dp = {
  "body-parser@1.15.2": {
    "bytes@2.4.0": {},
    "debug@2.2.0": {
      "ms@0.7.1": {}
    },
    "iconv-lite@0.4.13": {},
    "content-type@1.0.2": {},
    "raw-body@2.1.7": {
      "bytes@2.4.0": {},
      "iconv-lite@0.4.13": {},
      "unpipe@1.0.0": {}
    },
    "qs@6.2.0": {},
    "http-errors@1.5.0": {
      "inherits@2.0.1": {},
      "setprototypeof@1.0.1": {},
      "statuses@1.3.0": {}
    },
    "type-is@1.6.13": {
      "media-typer@0.3.0": {},
      "mime-types@2.1.12": {
        "mime-db@1.24.0": {}
      }
    },
    "on-finished@2.3.0": {
      "ee-first@1.1.1": {}
    },
    "depd@1.1.0": {}
  }
};







function tree(data) {
  return Object.keys(data).map( key => Object.keys(data[key]).length 
  ? { name: key, children: tree(data[key]) }
  : { name: key, size: 1000 }
  );
}

var data = {
  "angular-chart.js@1.0.3": {
    "chart.js@2.3.0": {
      "chartjs-color@2.0.0": {
        "chartjs-color-string@0.4.0": {
          "color-name@1.1.1": {}
        },
        "color-convert@0.5.3": {}
      },
      "moment@2.15.2": {}
    },
    "angular@1.5.8": {}
  }
};




// Sample data
var data = {
  "angular-chart.js@1.0.3": {
    "chart.js@2.3.0": {
      "chartjs-color@2.0.0": {
        "chartjs-color-string@0.4.0": {
          "color-name@1.1.1": {}
        },
        "color-convert@0.5.3": {}
      },
      "moment@2.15.2": {}
    },
    "angular@1.5.8": {}
  }
};
// conversion
// var arr = tree(data);
// output



// console.log(arr);

// tree(data, function(d){console.log( JSON.stringify(graph, null, 4) )  })[0], null, 4
// console.log( JSON.stringify(tree(data, function(){console.log( JSON.stringify(graph, null, 4) )  })[0], null, 4) )

function convertData(data, callback){

  graph.children.push( tree(data)[0] );
  console.log("----------------------------------------------------------");
  console.log( JSON.stringify(graph, null, 4) );
  console.log("----------------------------------------------------------");
  if(callback){
    callback();
  }
}

var options = {
  url: "https://raw.githubusercontent.com/akveo/blur-admin/master/package.json" ,
  // url: "https://raw.githubusercontent.com/akveo/blur-admin/master/package.json",
  headers: {
    'User-Agent': 'request'
  }
};
var gitRepos = "https://github.com/akveo/blur-admin";
var arr = [];
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    info = info.devDependencies;
    // arr = [];
    for (var key in info) {
      arr.push(key);
    }
    console.log("arr");
    console.log(arr);
    // return;
    var i = 0;
    function func(){

      if (i > arr.length) return;

      console.log(arr[i]);
      ls(arr[i], 'latest', function (obj) {
        console.log("#############¼¼¼¼¼¼¼¼¼¼@@@@@@@@@@@@@@||||||||||||||||||||||||||||");
        console.log(obj)
        console.log("#############¼¼¼¼¼¼¼¼¼¼@@@@@@@@@@@@@@||||||||||||||||||||||||||||");

        console.log(obj)
        if (obj === ""){
        }
        console.log("i = " + i + " " + arr[i++]  );
        // console.log( obj );
        // convertData(obj, func)
        func();
      });

    }
    func();
  }
  else{
    console.log("err: " + error);
  }
  console.log( JSON.stringify(graph, null, 4) );
}

http(options, callback);


var nlf = require('nlf');

// nlf.find({ directory: '/home/parfait/Documents/travailBachelor/ulr/app' }, function (err, data) {
//     // do something with the response object. 
//     console.log(JSON.stringify(data, null, 4));
// });



// nlf.find({
//     directory: '.',
//     production: true
// }, function (err, data) {
//     // do something with the response object. 
//     console.log(JSON.stringify(data));
// });


// var checker = require('license-checker');
//  
// checker.init({
//     start: '/path/to/start/looking'
// }, function(err, json) {
//     if (err) {
//         //Handle error 
//     } else {
//
//     console.log(JSON.stringify(json));
//         //The sorted json data 
//     }
// });

var licenses = require('licenses');

var npmview = require('npmview');

// function printFiles () {
//   const files = await getFilePaths();
//   for (let file of files) {
//     const contents = await fs.readFile(file, 'utf8');
//     console.log(contents);
//   }
// }


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function f2(){
  var i = 0;
  function f1(){
    if (i == arr.length){
      return;
    }
    console.log( arr[i++] );
    f1();
  }
  f1();
}


// var arr = [ 'api-copilot', 'grunt', 'grunt-contrib-watch', 'grunt-develop', 'load-grunt-tasks', 'request', 'time-grunt' ];



console.log("news");

var operationFunction = function(d) {
  var deferred = q.defer();
  process.nextTick(function() {
    deferred.resolve(d ? 1 : 0);
  });
  return deferred.promise;
};



var licenses = [];

var arr = [ 'api-copilot', 'grunt', 'grunt-contrib-watch', 'grunt-develop', 'load-grunt-tasks', 'request', 'time-grunt' ];

var gitRepos = "https://github.com/akveo/blur-admin";

arr.forEach(function(d){
  let promise = new Promise(function(resolve){
    npmview(d, function(err, version, moduleInfo) {
      // console.log("------------------------------");
      if (err) {
        console.log("err");
      }
      // console.log(licenses);
      if (!( licenses.indexOf(moduleInfo.license) > -1 )){
        licenses.push(moduleInfo.license);
        // console.log(licenses);
      }
      resolve( moduleInfo.license );
    });
  });
  licenses.push(promise);
});

Promise.all(licenses).then(function(ok) {
  console.log(ok);
});



Promise.all(arr.map(function(d){
  return new Promise(function(resolve){
    npmview(d, function(err, v, infos){
      if (err){
        console.log(err);
      }
      resolve(infos.license);
    });
  });
})).then(function(all){
  console.log("here is it");
  console.log(all);
  console.log("match : " + all.join().search('MIi'));
  console.log("here is it");
});



// var gitRepos = "https://api.github.com/NOUBISSI/testAngular";

var gitRepos = "https://github.com/akveo/blur-admin";
var parse = require('url-parse');
url = parse(gitRepos);



console.log(url.pathname);
// console.log(gitRepos.slice(22))
http({url:  'https://api.github.com/repos' + url.pathname, json:true , headers: { 'User-Agent': 'request' } },
  function(err,res, body){
    console.log("log http function call  ");
    if(err){
      console.log("log : ");
      console.log(err);
      return;
    }
    console.log("This is it ");
    // d.description =  body.description;
    // d.avatar = body.owner.avatar_url;
    // console.log(d);
    // data.push(d);
    console.log("test -----------");
    console.log(body.description);
    // console.log(body.owner.avatar_url);
    // console.log( JSON.stringify(body.description, null, 2) );
    console.log("test");
  });



  // function f(){
    //   Promise.all(licenses).then(function(ok) {
      //     console.log( ok);
      //     licenses = ok.sort().reduce(function(a, b){ if (b != a[0]) a.unshift(b); return a }, [])
        //       if( licenses.join().search('GPL') > -1 ){
          //         data.body.license = 'GPL';
          //       }
          //       else if( licenses.join().search('GPL') > -1 ){
            //         data.body.license = 'LGPL';
            //       }
            //       else{
              //         data.body.license = 'LGPL';
              //       }
              //       console.log(licenses);
              //   });
              //   return;
              // }
              // f();
              // console.log("--------------")


              // // var results = items.map(item => new Promise(...));
              // var results = arr.map(function(d){
                //   return new Promise( 
                  //     npmview(d, function(err, version, moduleInfo) {
                    //       if (err) {
                      //         console.log("err");
                      //       }
                      //       console.log(licenses);
                      //       if (!( licenses.indexOf(moduleInfo.license) > -1 )){
                        //         licenses.push(moduleInfo.license);
                        //         console.log(licenses);
                        //       }
                        //       resolve( moduleInfo.license );
                        //     });
                        //   );
                        // });
