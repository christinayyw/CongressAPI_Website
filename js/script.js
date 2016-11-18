 //start of page leg
$( document ).ready(function() {

        $("#page_leg").show();
        $("#page_bill").hide();
        $("#page_com").hide();
        $("#page_fav").hide();
    
    
  var dateC = new Date($('.dateConvert').text());
$('.dateConvert').text("HEY");

});

    $("#menuBtn").click(function(){
        $("#left").toggle();
    });

$("#party").text="HRE";


//CAROSEL STOP LOOP
$('#myCarousel').carousel({
  interval:false
});
$('#myCarousel2').carousel({
  interval:false
});
//PAGE SWITCH
    function bill(){
        $("#page_leg").hide();
        $("#page_bill").show();
        $("#page_com").hide();
        $("#page_fav").hide();

    }

    function leg(){
        $("#page_leg").show();
        $("#page_bill").hide();
        $("#page_com").hide();
        $("#page_fav").hide();

    }
    function com(){
        $("#page_leg").hide();
        $("#page_bill").hide();
        $("#page_com").show();
        $("#page_fav").hide();

    }
    function fav(){
        $("#page_leg").hide();
        $("#page_bill").hide();
        $("#page_com").hide();
        $("#page_fav").show();

    }
function detail(bioguide_id){
    window.alert(bioguide_id);

}
//progess BAR
angular.module('data', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

//function detail(bioguide_id,title,first_name,last_name,phone,term_start,term_end,office,state_name,fax,birthday,twitter_id,facebook_id,website){
//    window.alert(5 + 6);
//
//}
//var app = angular.module("data", ['angularUtils.directives.dirPagination','ui.codemirror']);
//app.controller("data", function ($scope, $http) {
//    $http.get('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json').then(function (response) {
//        $scope.total = response.data.length;
//        $.each(response.data, function (i, d) {
//            d.rank = parseInt(d.rank);
//            d.population = parseInt(d.population);
//        });
//        $scope.population = response.data;
//    });
//
//});

var app = angular.module("data", ['angularUtils.directives.dirPagination','ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.codemirror']);
app.controller("data", function ($scope, $http) {
    
    $scope.sortType ="state_name";
    $scope.sortType2="last_name";
    
        $scope.sortType3="introduced_on";
        $scope.sortType4="introduced_on";

    
    $scope.house="house";
        $scope.senate="senate";
    $scope.true="true";
        $scope.false="false";

    //datails func for BILLS
       $scope.detail_b = function(bill_id,official_title,bill_type,sponsor_title,sponsor_last_name,sponsor_first_name,chamber,status,introduced_on,c_url,status,b_url) {
           

//        window.alert(bioguide_id+title+first_name+last_name+phone+term_start,term_end,office,state_name,fax,birthday,twitter_id,facebook_id,website);
        
                  var months2 = new Array(12);
months2[0] = "Jan";
months2[1] = "Feb";
months2[2] = "Mar";
months2[3] = "Apr";
months2[4] = "May";
months2[5] = "Jun";
months2[6] = "Jul";
months2[7] = "Aug";
months2[8] = "Sep";
months2[9] = "Oct";
months2[10] = "Nov";
months2[11] = "Dec";

          
         //small top table
        $(".b_id").html(bill_id);
       $(".b_title").html(official_title);
      $(".b_type").html(bill_type);
       $(".b_sponsor").html(sponsor_title+". "+sponsor_last_name+", "+sponsor_first_name);
           
         b_date = new Date(introduced_on);
       $(".b_chamber").html(chamber);
       $(".b_status").html(status);
      $(".b_date").html(months2[(b_date.getMonth())]+" "+(b_date.getDate()+1) + ', ' +  b_date.getFullYear());
       $(".b_c_url").html("<a href='"+c_url+"' target='_blank'>"+"URL"+"</a>");
       $(".b_version").html(status);
      $(".b_b_url").html("<a href='"+b_url+"' target='_blank'>"+"LINK"+"</a>");
$(".b_pdf").html("<object data='"+b_url+"' type='application/pdf' width='100%' height='600px'><p>pdf here</p> </object>");

           
           
           
           
           
           
           
        
        
            $http.get('php.php?f=leg').then(function (response) {
                
                
            });


            
        };
    
    //details func for LEG
    $scope.detail = function(bioguide_id,title,first_name,last_name,oc_email,chamber,phone,party,term_start,term_end,office,state_name,fax,birthday,twitter_id,facebook_id,website) {
//        window.alert(bioguide_id+title+first_name+last_name+phone+term_start,term_end,office,state_name,fax,birthday,twitter_id,facebook_id,website);
        
        //pic
        $(".l_bioguide_id").html("<img src='https://theunitedstates.io/images/congress/225x275/"+bioguide_id +".jpg'  >");
          
          
         //small top table
        $(".l_name").html(title+", "+first_name+", "+last_name);
        $(".l_email").html("<a href='mailto:"+oc_email+"' target='_blank'>"+oc_email+"</a>");
        
         $(".l_chamber").html(chamber);
         $(".l_phone").html("Contact:"+"<a href='tel:"+phone+"' target='_blank'>"+phone+"</a>");
        
        if(party=="R"){
          $(".l_party").html("<img src='images/R.png' class='img-responsive'>"+"Republician");

        }else{
         $(".l_party").html("<img src='images/D.png' class='img-responsive'>"+"Democrat");

        }
        var months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";
         date = new Date(term_start);
         date2 = new Date(term_end);
         date3 = new Date(birthday);

        //bottom table
        
        
        //calculate term PORGRESS
        var now = new Date(); //todays date
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        //
        var diffDays = Math.round(Math.abs((now.getTime() - date.getTime())/(oneDay)));
        
        var diffDays2 = Math.round(Math.abs((date2.getTime() - date.getTime())/(oneDay)));

        term_prog = Math.round(diffDays/diffDays2*100);
        
        //$("#l_term").html((Math.round(term_prog))+"%");

        $(".l_term").html("<div class='col-sm-4'><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='1' aria-valuemin='0' aria-valuemax='100' style='width:"+term_prog+"%'>"+term_prog+"%</div></div></div>");
         $(".l_start").html(months[(date.getMonth())]  + (date.getDate()+1) + ',' +  date.getFullYear());
        
       
        $(".l_end").html(months[(date2.getMonth())]  + (date2.getDate()+1) + ',' +  date2.getFullYear());

         $(".l_office").html(office);
         $(".l_state").html(state_name);
         $(".l_fax").html("<a href='tel:"+fax+"' target='_blank'>"+fax+"</a>");
         $(".l_bday").html(months[(date3.getMonth())]  + (date3.getDate()+1) + ',' +  date3.getFullYear());
         $(".l_social").html(
             
             "<a href='https://www.twitter.com/"+twitter_id+"' target='_blank'>"+"<img src='images/t.png' class='img-responsive'>"+"</a>"+" "+
             
             "<a href='https://www.facebook.com/"+facebook_id+"' target='_blank'>"+"<img src='images/f.png' class='img-responsive'>"+"</a>"+" "+
             
             
             "<a href='"+website+"' target='_blank'>"+"<img src='images/w.png' class='img-responsive'>"+"</a>"+" "
         );
        
        
            $http.get('php.php?f=leg').then(function (response) {
                
                
            });


            
        };
    
     $scope.names = ["", "Alabama", "Alaska",'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming']
    
    
    $http.get('php.php?f=leg').then(function (response) {
        
        
        //$scope.total = response.data.length;
//        $.each(response.data[0], function (i, d) {
//            d.rank = parseInt(d.rank);
//            d.population = parseInt(d.population);
//        });
        $scope.population = response.data.results;
//        for(x in $scope.population){
//            if(x.state=="AL"){
//                x.state = "TESTTTT";
//            }
//        }
    });
    
    $http.get('php.php?f=bills').then(function (response) {
        
        
        //$scope.total = response.data.length;
//        $.each(response.data[0], function (i, d) {
//            d.rank = parseInt(d.rank);
//            d.population = parseInt(d.population);
//        });
        $scope.bills = response.data.results;
//        for(x in $scope.population){
//            if(x.state=="AL"){
//                x.state = "TESTTTT";
//            }
//        }
    });
    
    $http.get('php.php?f=com').then(function (response) {
        
        
        //$scope.total = response.data.length;
//        $.each(response.data[0], function (i, d) {
//            d.rank = parseInt(d.rank);
//            d.population = parseInt(d.population);
//        });
        $scope.com = response.data.results;
//        for(x in $scope.population){
//            if(x.state=="AL"){
//                x.state = "TESTTTT";
//            }
//        }
    });

});

//FAV BTN PARAM
var f_l_name ="";

//FAV button func
function fav_btn(){
    var f_l_chamber=$(".l_chamber").html();
    f_l_name =$(".l_name").html().substring(4);
    $("#f_table_leg tr:last").after("<tr><th>"+"<button type='button' onclick='delFav(this)' class='btn btn-default'><i class='fa fa-trash' aria-hidden='true'></i></button>"+"</th><th><div class='img-responsive'>"+($(".l_bioguide_id").html())+"</div></th><th>"+($('.l_party').html().replace('Republician','')).replace('Democrat','')+"</th><th>"+f_l_name+"</th><th>"+"<img src='images/"+f_l_chamber+".png' class='img-responsive' alt='N.A.'>" +f_l_chamber +"</th><th>"+$(".l_state").html()+"</th><th>"+$(".l_email").html()+"</th><th><button type='button' ng-click='detail()' class='btn btn-primary' class='carousel-control left' href='#myCarousel' data-slide='next'>View Details</button></th></tr>");
    
}

//FAV button for bill
function fav_btn_bill(){
    var f_l_chamber=$(".b_chamber").html();
    
    $("#f_table_bill tr:last").after("<tr><th>"+"<button type='button' onclick='delFav(this)' class='btn btn-default'><i class='fa fa-trash' aria-hidden='true'></i></button>"+"</th><th><div class='img-responsive'>"+($(".b_id").html())+"</div>"+"</th><th>"+($(".b_type").html())+"</th><th>"+($(".b_title").html())+"</th><th>"+"<img src='images/"+f_l_chamber+".png' class='img-responsive' alt='N.A.'>" +f_l_chamber +"</th><th>"+$(".b_date").html()+"</th><th>"+$(".b_sponsor").html()+"</th><th><button type='button' ng-click='detail()' class='btn btn-primary' class='carousel-control left' href='#myCarousel' data-slide='next'>View Details</button></th></tr>");
    
}

function delFav(o) {
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

//remove fav function
$('.f_table_leg').on('click', 'input[type="button"]', function(e){
   $(this).closest('tr').remove()
})
