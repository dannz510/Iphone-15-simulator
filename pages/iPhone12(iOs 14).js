$(function(){
  //Global Vars
  const globalState = {
    apps: [
      {
        name: 'Calendar',
        icon: '../Icons/Calendar.png',
        type: 'widgetFull',
        dynamic: true
      },
      {
        name: 'Weather',
        icon: '../Icons/Weather.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'FaceTime',
        icon: '../Icons/FaceTime.png',
        type: 'app',
        dynamic: false
      },
      {   
        name: 'Calendar',
        icon: '../Icons/Calendar.png',
        type: 'app',
        dynamic: true
      },
      {
        name: 'Clock',
        icon: '../Icons/Clock.png',
        type: 'app',
        dynamic: true
      },
      {
        name: 'Photos',
        icon: '../Icons/Photos.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Maps',
        icon: '../Icons/GoogleMaps.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Camera',
        icon: '../Icons/Camera.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Reminders',
        icon: '../Icons/Reminders.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Facebook',
        icon: '../Icons/Facebook.png',
        type: 'app',
        notifications: 5,
        dynamic: false
      },
      {
        name: 'Notes',
        icon: '../Icons/Notes.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'App Store',
        icon: '../Icons/AppStore.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Health',
        icon: '../Icons/Health.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Message',
        icon: '../Icons/iOsMessage.png',
        notifications: 123,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Settings',
        icon: '../Icons/Settings.png',
        type: 'app',
        notifications: 3,
        dynamic: false
      },
      {
        name: 'Apple Store',
        icon: '../Icons/AppleStore.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'WhatsApp',
        icon: '../Icons/WhatsApp.png',
        type: 'app',
        notifications: 22,
        dynamic: false
      },
      {
        name: 'Calculator',
        icon: '../Icons/Calculator.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Twitter',
        icon: '../Icons/Twitter.png',
        type: 'app',
        notifications: 2,
        dynamic: false
      },
      {
        name: 'Messenger',
        icon: '../Icons/Messenger.png',
        notifications: 3,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Compass',
        icon: '../Icons/Compass.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Google',
        icon: '../Icons/Google.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Music',
        icon: '../Icons/AppleMusic.png',
        type: 'app',
        dynamic: false
      },
      
      {
        name: 'Voice Memos',
        icon: '../Icons/VoiceMemos.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Wallet',
        icon: '../Icons/Wallet.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Podcasts',
        icon: '../Icons/Podcasts.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Files',
        icon: '../Icons/Files.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'Contacts',
        icon: '../Icons/Contacts.png',
        type: 'app',
        dynamic: false
      },
      {
        name: 'YouTube',
        icon: '../Icons/YouTube.png',
        notifications: 1,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Spotify',
        icon: '../Icons/Spotify.png',
        notifications: 1,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Minigame',
        icon: '../Icons/game.png',
        notifications: 0,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Bendy',                               
        icon: '../Icons/Bendy.png',
        notifications: 0,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Widget',                               
        icon: '../Icons/Widget.png',
        notifications: 3,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Copilot',                               
        icon: '../Icons/Copilot.png',
        notifications: 0,
        type: 'app',
        dynamic: false
      },
      {
        name: 'Tiktok',                               
        icon: '../Icons/Tiktok.png',
        notifications: 0,
        type: 'app',
        dynamic: false
      },
    
    ],
    wrapperApps: {
      appsGroup: 24,
      groupActive: 1,
      medida: $('.wrapperApps').outerWidth(true),
      transform: 0
    },
    dateTime: {
      months: ['January ',' February ',' March ',' April ',' May ',' June ',' July ',' August ',' September ',' October ',' November ',' December '],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    batteryLow: false,
    draggScreen: false
  }
  //Extended Functions
  $.fn.extend({
  touchMov: function(config){
    config = jQuery.extend({
      mov: 'x',
      movLeft: function(){},
      movRight: function(){},
      movUp: function(){},
      movDown: function(){},
      updateMovX: function(){},
      updateMovY: function(){},
      finishMov: function(){}
    }, config);
    let el = this;
    let initCoords = { x: 0, y: 0 };
    let movCoords = { x: 0, y: 0 };
    let downCoords = { x: 0, y: 0 };

    function handleStart(e) {
      initCoords = { x: e.pageX, y: e.pageY };
      downCoords = { x: movCoords.x, y: movCoords.y };
    }

    function handleMove(e) {
      globalState.draggScreen = true;
      movCoords = { x: e.pageX, y: e.pageY };
      if (config.mov === 'x') {
        config.updateMovX(e, (movCoords.x - initCoords.x))
      } else if (config.mov === 'y') {
        config.updateMovY(e, (movCoords.y - initCoords.y))
      }
    }

    function handleEnd(e) {
      if (config.mov === 'x') {
        if (movCoords.x - downCoords.x != 0) {
          (movCoords.x - initCoords.x) > 0 ? config.movRight(e) : config.movLeft(e);
        }
      } else if (config.mov === 'y') {
        if (movCoords.y - downCoords.y != 0) {
          (movCoords.y - initCoords.y) > 0 ? config.movDown(e) : config.movUp(e);
        }
      }
      globalState.draggScreen = false;
      config.finishMov(e);
      el.off('mousemove touchmove');
      el.off('mouseup touchend');
      el.off('mouseleave touchcancel');
    }

    el.on('mousedown touchstart', handleStart);
    el.on('mousemove touchmove', handleMove);
    el.on('mouseup touchend', handleEnd);
    el.on('mouseleave touchcancel', handleEnd);
      return this;
    },
    calendar: function(config){
      config = jQuery.extend({
        date: new Date(),
        fullDay: false
      }, config);
      let month = globalState.dateTime.months[config.date.getMonth()];
      let daysMonth = new Date(config.date.getFullYear(), (config.date.getMonth() + 1), 0).getDate();
      let today = config.date.getDate();
      let firstDay = new Date(config.date.getFullYear(), config.date.getMonth(), 0).getDay();
      this.append(`
<div class="month">
<p class="monthName">${month}</p>
<div class="calendarTable">
<div class="tableHeader"></div>
<div class="tableContent"></div>
</div>
</div>`
                 );
      let header = this.find('.month .tableHeader');
      let content = this.find('.month .tableContent');
      globalState.dateTime.days.map(day => header.append(`<div class="dayName">${config.fullDay ? day : day.charAt(0)}</div>`))
      for (var k = 0; k <= firstDay; k++) {
        content.prepend('<div></div>');
      }
      for (let index = 1; index <= daysMonth; index++) {
        content.append(`<div class="dayNum ${today == index ? 'active':''}">${index}</div>`);
      }
      return this;
    },
    dateIcon: function(config){
      config = jQuery.extend({
        date: new Date(),
        fullDay: false
      }, config);
      let today = config.date.getDate();
      let day = globalState.dateTime.days[config.date.getDay()];
      this.append(`<div class="dateWrapper"><p class="dayNam">${config.fullDay ? day : day.substring(0, 3)}</p><p class="dayNum">${today}</p></div>`);
      return this;
    },
    clock: function(){
      let tym = new Date();
      let numbers = '';
      for (let index = 1; index <= 12; index++) {
        numbers += `<div class="number" data-num="${index}"></div>`;
      }
      let transformHour = `calc(${(360 / 12 - 360) * tym.getHours()}deg + ${(30 / 60) * tym.getMinutes()}deg)`;
      let transformMinutes = `calc(6deg * ${tym.getMinutes()} + ${(6 / 60) * tym.getSeconds()}deg)`;
      let transformSeconds = `calc(6deg * ${tym.getSeconds()})`;
      this.append(
        `<div class="clockWrapper">
<div class="clock">
<div class="numbers">${numbers}</div>
<div class="hands">
<div class="hand hour" style="transform: rotate(${transformHour});"><div class="stick"></div></div>
<div class="hand minutes" style="transform: rotate(${transformMinutes});"><div class="stick"></div></div>
<div class="hand seconds" style="transform: rotate(${transformSeconds});"><div class="stick"></div></div>
</div>
</div>
</div>`
      );
      return this;
    },
    hour: function(config) {
      config = jQuery.extend({
        realtime: true
      }, config);
      var today = new Date();
      var hour = today.getHours();
      if (hour < 10) hour = '0' + hour;
      var minutes = today.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      if (config.realtime) {
        setInterval(() => {
          today = new Date();
          hour = today.getHours();
          if (hour < 10) hour = '0' + hour;
          minutes = today.getMinutes();
          if (minutes < 10) minutes = '0' + minutes;
          this.empty();
          this.text(`${hour}:${minutes}`);
        }, 1000);
      }
      this.text(`${hour}:${minutes}`);
      return this;
    },
    date: function (config) {
      config = jQuery.extend({
        date: new Date(),
        fullDay: true
      }, config);
      let today = config.date.getDate();
      let day = globalState.dateTime.days[config.date.getDay()];
      let month = globalState.dateTime.months[config.date.getMonth()];
      this.text(`${config.fullDay ? day : day.substring(0, 3)}, ${today} ${month}`);
      return this;
    },
  })

  //Functions
  function restructureString(string){
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function paintApps(apps, container, containerDots){
    container.empty();
    containerDots.empty();
    globalState.wrapperApps.groups = Math.ceil(apps.length / globalState.wrapperApps.appsGroup);
    let appCount = 1;
    let html = '';
    apps.map((app, idArr) => {
      if (appCount == 1) html += '<div class="group">';
      let clases = 'app';
      if (app.type == 'widgetFull') clases = clases + ' widgetFull';
      if (app.dynamic && app.type == 'app') clases = `${clases} ${restructureString(app.name).toLowerCase()}Dynamic`;
      html += `<div class="${clases}" data-app="${app.type + restructureString(app.name)}" data-id="${idArr}">
${app.notifications ? `<div class="notification">${app.notifications}</div>` : ''}
<div class="icon" style="${!app.dynamic ? `background-image:url(${app.icon});` : 'background-color:#fff;'}"></div>
<p class="name">${app.name}</p>
</div>`;
      if (appCount == globalState.wrapperApps.appsGroup) {
        html += '</div>';
        appCount = 1;
        return false;
      }
      app.type == 'widgetFull' ? appCount = appCount + 8 : appCount++;
    })
    if (globalState.wrapperApps.groups > 1) {
      for (let index = 0; index < globalState.wrapperApps.groups; index++) {
        containerDots.append(`<div class="dot ${index == 0 ? 'active':''}"></div>`);
      }
    }
    container.append(html);
  }
  function alertiOS(config) {
    if ($('#iOSAlert').length || $('.mainScreen').hasClass('locked')) return false;
    config = jQuery.extend({
      wrapper: $('.iphone .blackBorder'),
      actions: [
        {
          text: 'Accept',
          warning: true,
          // callback: function(){console.log('callback accept')}
        },
        {
          text: 'Cancel',
          warning: false,
          // callback: function () { console.log('callback cancel') }
        }
      ],
      closable: false,
      closeOnActions: true,
     
      hide: false
    }, config);
    var actions = '';
    if (config.actions) {
      $.each(config.actions, function (k, action) {
        actions += `<div class="action ${action.warning ? 'warning':''}">${action.text}</div>`;
      })
    }
    if (config.hide) {
      $(document).off('click', '#iOSAlert .action');
      $('#iOSAlert').fadeOut(function () { $(this).remove() });
      return false;
    }
    config.wrapper.append(`
<div id="iOSAlert">
<div class="containers hidAnim">
<p class="headers">${config.headers}</p>
<p class="messages">${config.messages}</p>
<div class="actions">${actions}</div>
</div>
</div>
`);
    if (config.closable) $('#iOSAlert').prepend('<div class="closable"></div>');
    $('#iOSAlert').fadeIn('fast', function () {
      $(this).children('.containers').removeClass('hidAnim');
    }).css('display', 'flex');
    $(document).on('click', '#iOSAlert .action', function (e) {
      let action = config.actions[$(e.currentTarget).index()];
      if (action.callback && (typeof action.callback == 'function')) {
        action.callback(e);
      }
      if (config.closeOnActions) {
        $(document).off('click', '#iOSAlert .action');
        $('#iOSAlert').fadeOut('fast', function () { $(this).remove() });
      }
    })
    if (config.hasOwnProperty('autoclose')) {
      setTimeout(function () {
        $(document).off('click', '#iOSAlert .action');
        $('#iOSAlert').fadeOut('fast', function () { $(this).remove() });
      }, config.autoclose)
    }
    $(document).on('click', '#iOSAlert .closable', function () {
      $(document).off('click', '#iOSAlert .action');
      $('#iOSAlert').fadeOut('fast', function () { $(this).remove() });
    })
  }
  
  //Camera App
  function camera(){
    if (!$('.cameraApp').length) {
      $('.mainScreen').append(`
<div class="cameraApp hidden">
<div class="topBar">
<div class="camIco flash">
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<path d="M41 6L13 34h14.187L23 58l27.998-29.999H37L41 6z"></path>
</svg>
</div>
<div class="camIco chevronUp">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<path d="M20 40l11.994-14L44 40"></path>
</svg>
</div>
<div class="camIco circles">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<path d="M45 32a17 17 0 0 1-9.8 5.7M22 34.8a17 17 0 1 1 26.2-8.5"></path>
<path d="M15.8 26.3a17 17 0 1 1-5.8 2.3"></path>
<path d="M32 54a17 17 0 0 1-3.3-16m3.3-6a17 17 0 1 1 6 26.5"></path>
</svg>
</div>
</div>
<div class="cameraArea">
<iframe src="../apps/Camera.html" style="width="290px" height="410px" scrolling="no""></iframe>
</div>
<div class="modesCamera">
<div class="mode">SLO-MO</div>
<div class="mode">VIDEO</div>
<div class="mode active">PHOTO</div>
<div class="mode">PORTRAIT</div>
<div class="mode">PANO</div>
</div>
<div class="shutterArea">
<div class="imgPreview" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/selfie.jpg?alt=media&token=9b87b717-798c-4f37-88f7-b8442bf6655b);"></div>
<div class="shutter"></div>
<div class="toggleCam">
<div class="camIco">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<path d="M54.741 28.14a23.002 23.002 0 0 1-39.088 19.124"></path>
<path d="M9.065 33.62A23.008 23.008 0 0 1 31.917 8a22.934 22.934 0 0 1 16.262 6.732"></path>
<path d="M2 24l7.065 9.619L18 26"></path>
<path d="M62 38l-7.259-9.86L46 36"></path>
</svg>
</div>
</div>
</div>
</div>`
                             );
      $('.cameraApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
          $('.statusBar').removeClass('onlyLed camActiv');
        }
      });
    }
  
  //Time out Function for Camera App
    setTimeout(function(){
      $('.statusBar').addClass('onlyLed camActiv');
    
      $('.cameraApp').removeClass('hidden');
    }, 100)
  }
  // Music App
  function music() {
    if (!$('.musicApp').length) {
      $('.mainScreen').append(`
      <div class="musicApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/music-app/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.musicApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Music App
    setTimeout(function () {
      $('.musicApp').removeClass('hidden');
    }, 100)
  }
  
 // copilot App
  function copilot() {
    if (!$('.copilotApp').length) {
      $('.mainScreen').append(`
      <div class="copilotApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="https://copilot.microsoft.com/" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.copilotApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for copilot App
    setTimeout(function () {
      $('.copilotApp').removeClass('hidden');
    }, 100)
  }


 // Tiktok App
  function tiktok() {
    if (!$('.tiktokApp').length) {
      $('.mainScreen').append(`
      <div class="tiktokApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Tiktok.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.tiktokApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for tiktok App
    setTimeout(function () {
      $('.tiktokApp').removeClass('hidden');
    }, 100)
  }

//Bendy
  function bendy() {
    if (!$('.bendyApp').length) {
      $('.mainScreen').append(`
      <div class="bendyApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 100%;">
  <iframe src="https://media.boyslife.org/onlinegames/nitroderby/" style="width:280px; height:500px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.bendyApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for bendyApp App
    setTimeout(function () {
      $('.bendyApp').removeClass('hidden');
    }, 100)
  }


//widget
  function widget() {
    if (!$('.widgetApp').length) {
      $('.mainScreen').append(`
      <div class="widgetApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 100%;">
  <iframe src="../apps/widget/dist/index.html" style="width:300px; height:500px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.widgetApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for widget App
    setTimeout(function () {
      $('.widgetApp').removeClass('hidden');
    }, 100)
  }


// App Store App
  function appstore() {
    if (!$('.appstoreApp').length) {
      $('.mainScreen').append(`
      <div class="appstoreApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/App-store/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>
      `
      );
      $('.appstoreApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Appstore App
    setTimeout(function () {
      $('.appstoreApp').removeClass('hidden');
    }, 100)
  }
  

  //Maps App
  function maps() {
    if (!$('.mapsApp').length) {
      $('.mainScreen').append(`
        <div class="mapsApp hidden">
          <div class="appScreen">
                <div class="contents">
                <div style="width: 80%; height: 350%;">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3652151.2747342857!2d73.87389695!3d26.630739750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618039457657!5m2!1sen!2sin" style="width:320px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
                </div> 
          </div>
        </div>`
      );
      $('.mapsApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Maps App
    setTimeout(function () {
      $('.mapsApp').removeClass('hidden');
    }, 100)
  }
  
  //Google App
  function google() {
    if (!$('.googleApp').length) {
      $('.mainScreen').append(`
        <div class="googleApp hidden">
          <div class="appScreen">
                <div class="contents">
                   <iframe src="https://www.google.com/search?igu=1" width="300px" height="570px"></iframe>
                </div> 
          </div>
        </div>`
      );
      $('.googleApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Google App
    setTimeout(function () {
      $('.googleApp').removeClass('hidden');
    }, 100)
  }
  
  //Calculator App
  function calculator() {
    if (!$('.calculatorApp').length) {
      $('.mainScreen').append(`
        <div class="calculatorApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 260%;">
  <iframe src="../apps/Icalc/index.html" style="width:300px; height:530px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
              
     </div>
        </div>`
      );
      $('.calculatorApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Calculator App
    setTimeout(function () {
      $('.calculatorApp').removeClass('hidden');
    }, 100)
  }
  
  //Weather App
  function weather() {
    if (!$('.weatherApp').length) {
      $('.mainScreen').append(`
        <div class="weatherApp hidden">
       <div class="appScreen">
            <div class="contents">
               <iframe src="../apps/weather-app-final/index.html" style="width="400px" height="600px" background-color="white""></iframe>
      </div>
     </div>
        </div>`
      );
      $('.weatherApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Weather App
    setTimeout(function () {
      $('.weatherApp').removeClass('hidden');
    }, 100)
  }
  
  //Message App
  function message() {
    if (!$('.messageApp').length) {
      $('.mainScreen').append(`
        <div class="messageApp hidden">
       <div class="appScreen">
            <div class="contents">
              <iframe src="../apps/iMessage/imessage.html" style="width="400px" height="580px""></iframe>
      </div>
     </div>
        </div>`
      );
      $('.messageApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Message App
    setTimeout(function () {
      $('.messageApp').removeClass('hidden');
    }, 100)
  }
  


  //Contacts App
  function contacts() {
    if (!$('.contactsApp').length) {
      $('.mainScreen').append(`
        <div class="contactsApp hidden">
       <div class="appScreen">
            <div class="contents">
              <iframe src="../apps/Contacts/Contacts.html" style="width="300px" height="600px""></iframe>
      </div>
     </div>
        </div>`
      );
      $('.contactsApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Contacts App
    setTimeout(function () {
      $('.contactsApp').removeClass('hidden');
    }, 100)
  }
  
 
  //youTube App
  function youTube() {
    if (!$('.youTubeApp').length) {
      $('.mainScreen').append(`
        <div class="youTubeApp hidden">
       <div class="appScreen">
            <div class="contents">
              <iframe width="290" height="550" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=0&playlist=tgbNymZ7vqY&loop=1">
</iframe>
      </div>
     </div>
        </div>`
      );
      $('.youTubeApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for youTube App
    setTimeout(function () {
      $('.youTubeApp').removeClass('hidden');
    }, 100)
  }

//Spotify App
 function spotify() {
    if (!$('.spotifyApp').length) {
      $('.mainScreen').append(`
        <div class="spotifyApp hidden">
       <div class="appScreen">
            <div class="contents">
              <iframe src="../apps/spotify.html" style="width="280px" height="540px"">
</iframe>

      </div>
     </div>
        </div>`
      );
      $('.spotifyApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for spotify App
    setTimeout(function () {
      $('.spotifyApp').removeClass('hidden');
    }, 100)
  }

//Clock App
 function clock() {
    if (!$('.clockApp').length) {
      $('.mainScreen').append(`
        <div class="clockApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Apple-watch/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.clockApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for clock App
    setTimeout(function () {
      $('.clockApp').removeClass('hidden');
    }, 100)
  }



//Settings App
 function settings() {
    if (!$('.settingsApp').length) {
      $('.mainScreen').append(`
        <div class="settingsApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Setting/dist/index.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.settingsApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for settings App
    setTimeout(function () {
      $('.settingsApp').removeClass('hidden');
    }, 100)
  }


//Minigame App
 function minigame() {
    if (!$('.minigameApp').length) {
      $('.mainScreen').append(`
        <div class="minigameApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Game/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.minigameApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for <inigame App
    setTimeout(function () {
      $('.minigameApp').removeClass('hidden');
    }, 100)
  }

//Reminders App
 function reminders() {
    if (!$('.remindersApp').length) {
      $('.mainScreen').append(`
        <div class="remindersApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Todo/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.remindersApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for reminders App
    setTimeout(function () {
      $('.remindersApp').removeClass('hidden');
    }, 100)
  }

//Whatsapp App
 function whatsapp() {
    if (!$('.whatsappApp').length) {
      $('.mainScreen').append(`
        <div class="whatsappApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Whatsapp/dist/index.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.whatsappApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for whatsapp App
    setTimeout(function () {
      $('.whatsappApp').removeClass('hidden');
    }, 100)
  }



//Twitter App
 function twitter() {
    if (!$('.twitterApp').length) {
      $('.mainScreen').append(`
        <div class="twitterApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Twitter/dist/index.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.twitterApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for twitter App
    setTimeout(function () {
      $('.twitterApp').removeClass('hidden');
    }, 100)
  }


//Messenger App
 function messenger() {
    if (!$('.messengerApp').length) {
      $('.mainScreen').append(`
        <div class="messengerApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div class="scrollable-div" style="width: 100%; height: 350%;">
  <iframe src="../apps/Messenger/dist/index.html" style="width:300px; height:520px; overflow:scroll"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.messengerApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for messenger App
    setTimeout(function () {
      $('.messengerApp').removeClass('hidden');
    }, 100)
  }


//Facebook App
 function facebook() {
    if (!$('.facebookApp').length) {
      $('.mainScreen').append(`
        <div class="facebookApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Facebook/dist/index.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.facebookApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for facebook App
    setTimeout(function () {
      $('.facebookApp').removeClass('hidden');
    }, 100)
  }



//Files App
 function files() {
    if (!$('.filesApp').length) {
      $('.mainScreen').append(`
        <div class="filesApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 600%;">
  <iframe src="../apps/File/demo.html" style="width:300px; height:2500px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.filesApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for files App
    setTimeout(function () {
      $('.filesApp').removeClass('hidden');
    }, 100)
  }


//Applestore App
 function applestore() {
    if (!$('.applestoreApp').length) {
      $('.mainScreen').append(`
        <div class="applestoreApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Apple-store/dist/index.html" style="width:300px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.applestoreApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for applestore App
    setTimeout(function () {
      $('.applestoreApp').removeClass('hidden');
    }, 100)
  }

//Compass App

 function compass() {
    if (!$('.compassApp').length) {
      $('.mainScreen').append(`
        <div class="compassApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/Compass/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.compassApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for clock App
    setTimeout(function () {
      $('.compassApp').removeClass('hidden');
    }, 100)
  }


// Calendar app
 function calendar() {
    if (!$('.calendarApp').length) {
      $('.mainScreen').append(`
        <div class="calendarApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 260%;">
  <iframe src="../apps/Calendar/dist/index.html" style="width:300px; height:550px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.calendarApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for calendar App
    setTimeout(function () {
      $('.calendarApp').removeClass('hidden');
    }, 100)
  }


// Notes app
 function notes() {
    if (!$('.notesApp').length) {
      $('.mainScreen').append(`
        <div class="notesApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 260%;">
  <iframe src="../apps/Notes/dist/index.html" style="width:300px; height:550px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
        </div>`
      );
      $('.notesApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for notes App
    setTimeout(function () {
      $('.notesApp').removeClass('hidden');
    }, 100)
  }

  // Music App
  function music_deck() {
      $('.mainScreen').append(`
      <div class="musicApp hidden">
       <div class="appScreen">
            <div class="contents">

<div style="width: 100%; height: 350%;">
  <iframe src="../apps/music-app/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>



          </div>
         </div>
        </div>`
      );
      $('.musicApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
  
  //Time out Function for Music App
    setTimeout(function () {
      $('.musicApp').removeClass('hidden');
    }, 100)
  }
 

  // AppStore App
  function appstore_deck() {
      if (!$('.appstoreApp').length) {
      $('.mainScreen').append(`
      <div class="appstoreApp hidden">
       <div class="appScreen">
            <div class="contents">
            <div style="width: 100%; height: 350%;">
  <iframe src="../apps/App-store/dist/index.html" style="width:350px; height:520px; overflow-x:hidden; overflow-y:auto; -ms-overflow-style: none; scrollbar-width: none;"></iframe>
  </div>
     </div>
      </div>`
      );
      $('.appstoreApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
    }
  
  //Time out Function for Appstore App
    setTimeout(function () {
      $('.appstoreApp').removeClass('hidden');
    }, 100)
  }
  

  // Message App
  function message_deck() {
      $('.mainScreen').append(`
        <div class="messageApp hidden">
       <div class="appScreen">
            <div class="contents">
              <iframe src="../apps/iMessage/imessage.html" style="width="400px" height="580px""></iframe>
      </div>
     </div>
        </div>`
      );
      $('.messageApp').touchMov({
        mov: 'y',
        movUp: function (e) {
          $(e.currentTarget).addClass('hidden');
        }
      });
  
  //Time out Function for Message App
    setTimeout(function () {
      $('.messageApp').removeClass('hidden');
    }, 100)
  }
  
  function renderUI(){
    paintApps(globalState.apps, $('.wrapperApps'), $('.wrapperDots'));
    if ($('.wrapperApps .app[data-app="widgetFullCalendar"]').length) {
      $('.wrapperApps .app[data-app="widgetFullCalendar"] .icon').append('<div class="events"><p>No more events for today</p></div><div class="calendarWrapper"></div>');
      $('.wrapperApps .app[data-app="widgetFullCalendar"] .icon .calendarWrapper').calendar();
    }
  
    if ($('.wrapperApps .app.calendarDynamic').length) {
      $('.wrapperApps .app.calendarDynamic .icon ').dateIcon();
    }
    
    if ($('.wrapperApps .app.clockDynamic').length) {
      $('.wrapperApps .app.clockDynamic .icon').clock();
    }
  }
  function switchedOn(){
    renderUI();
    setTimeout(() => {
      $('.interactionInfo').removeClass('hidden');
      $('.iphone').removeClass('initAnimation').addClass('powerOn');
      setTimeout(() => {
        $('.iphone').removeClass('powerOn').addClass('arrhe');
        $('.mainScreen').removeClass('locked');
      }, 2000);
    }, 1000);
  }

  switchedOn();
  $('.statusBar .hour').hour();
  $('.lockScreen .hour').hour();
  $('.lockScreen .date').date();
  $('.widgetCenter .block.events').dateIcon({fullDay: true});

  //Touch actions
  $('.lockScreen').touchMov({
    mov: 'y',
    movUp: function(e){
      $(e.currentTarget).siblings('.statusBar').addClass('mov');
      $(e.currentTarget).addClass('hidden');
      $(e.currentTarget).siblings('.appScreen.hidden').removeClass('hidden');
      setTimeout(() => {
        $(e.currentTarget).siblings('.statusBar').removeClass('mov');
        $(e.currentTarget).siblings('.statusBar').find('.operator').addClass('hidden');
        $(e.currentTarget).siblings('.statusBar').find('.hour').removeClass('hidden');
      }, 300)
    }
  });
  $('.wrapperApps').touchMov({
    updateMovX: function(e, mov){
      $(e.currentTarget).css({
        transform: `translateX(${globalState.wrapperApps.transform + mov}px)`,
        transition: 'none'
      });
    },
    movLeft: function (e) {
      if (globalState.wrapperApps.groupActive != globalState.wrapperApps.groups) {
        globalState.wrapperApps.groupActive++;
      }
      $(e.currentTarget).css({
        transform: `translateX(-${globalState.wrapperApps.medida * (globalState.wrapperApps.groupActive - 1)}px)`,
        transition: 'ease all 0.2s'
      });
      $('.wrapperDots .dot').removeClass('active');
      $('.wrapperDots .dot').eq(globalState.wrapperApps.groupActive - 1).addClass('active');
    },
    movRight: function (e) {
      if (globalState.wrapperApps.groupActive != 1) {
        globalState.wrapperApps.groupActive--;
        $(e.currentTarget).css({
          transform: `translateX(${globalState.wrapperApps.transform + globalState.wrapperApps.medida}px)`,
          transition: 'ease all 0.2s'
        });
      } else {
        $(e.currentTarget).parents('.mainScreen').addClass('blur');
        $(e.currentTarget).parents('.appScreen').addClass('moveOut');
        $(e.currentTarget).parents('.appScreen').siblings('.widgetCenter').removeClass('hidden');
        $(e.currentTarget).css({
          transform: `translateX(${globalState.wrapperApps.medida * (globalState.wrapperApps.groupActive - 1)}px)`,
          transition: 'ease all 0.2s'
        });
      }
      $('.wrapperDots .dot').removeClass('active');
      $('.wrapperDots .dot').eq(globalState.wrapperApps.groupActive - 1).addClass('active');
    },
    finishMov: function(e){
      transform = e.currentTarget.style.transform;
      if (transform.length) {
        transform = transform.split('(');
        transform = transform[1].split('px');
        transform = parseInt(transform[0]);
      } else {
        transform = 0;
      }
      globalState.wrapperApps.transform = transform;
    }
  });
  $('.widgetCenter .contents').touchMov({
    mov: 'x',
    movLeft: function (e) {
      $(e.currentTarget).parents('.mainScreen').removeClass('blur');
      $(e.currentTarget).parent().addClass('hidden').removeAttr('style');
      $(e.currentTarget).parent().siblings('.appScreen.moveOut').removeClass('moveOut');
    },
    updateMovX: function (e, mov) {
      if (Math.sign(mov) == 1) {
        $(e.currentTarget).parent().css({
          transform: `translateX(${mov}px)`,
          transition: 'none'
        });
      }
    },
    movRight: function(e){
      $(e.currentTarget).parent().css({
        transform: 'none',
        transition: 'ease all .2s'
      });
      setTimeout(() => {
        $(e.currentTarget).parent().removeAttr('style');
      }, 200)
    }
  });
  $('.statusBar').touchMov({
    mov: 'y',
    movDown: function (e) {
      $(e.currentTarget).parent().addClass('blur');
      $(e.currentTarget).siblings('.controlCenter.hidden').removeClass('hidden');
    }
  });
  $('.controlCenter').touchMov({
    mov: 'y',
    movUp: function (e) {
      $(e.currentTarget).addClass('hidden');
      $(e.currentTarget).parent().removeClass('blur');
    }
  });

  //Floating menu when pressing app for 1 second
  $('.mainScreen .appScreen').mousedown(function(e){
    if ($(this).parent().hasClass('shakingApps')) return false;
    let timeout = setTimeout(() => {
      console.log('a');
      if (!globalState.draggScreen) {
        if ($(e.target).hasClass('app') || $(e.target).parents('.app').length) {
          //Dio click en una app. Ok, le mostraremos el menu flotante
          $(this).parent().addClass('filterBlur');
          let app;
          if ($(e.target).hasClass('app')) {
            app = $(e.target);
          } else {
            app = $(e.target).parents('.app');
          }
          let appClon = app.clone();
          appClon.attr('id', 'fixedApp');
          appClon.css({
            top: app[0].getBoundingClientRect().top,
            left: app[0].getBoundingClientRect().left,
            width: app[0].getBoundingClientRect().width
          })
          $('body').append(appClon);
          let rectsIphone = $('.iphone .blackBorder')[0].getBoundingClientRect();
          let rectsApp = appClon.children('.icon')[0].getBoundingClientRect();
          let cssMenu = `left: ${((rectsIphone.x + rectsIphone.width) - rectsApp.x) >= 190 ? rectsApp.x : (rectsApp.x + rectsApp.width) - 190}px;`;
          if ((rectsIphone.top + (65 * 2)) >= rectsApp.top) {
            cssMenu += `top : ${rectsApp.y + rectsApp.height}px; transform: translateY(10px)`;
          } else {
            cssMenu += `top: ${rectsApp.y}px; transform: translateY(calc(-100% - 10px));`;
          }
          $('body').append(`
<div class="fixedMenuFixedApp" style="${cssMenu}">
<div class="menuOption remove">Remove App
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<circle cx="32" cy="32" r="30"></circle>
<path d="M48 32H16"></path>
</svg>
</div>
</div>
<div class="menuOption shaking">Edit Home Screen
<div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<path d="M14 59a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9H14zM50 5a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v5h36zm0 45V10m-36 0v40"></path>
<circle cx="32" cy="56" r="2"></circle>
</svg>
</div>
</div>
</div>
`);
        } else {
          $(this).parent().addClass('shakingApps');
          $('.appScreen .app').append('<div class="removeApp"></div>');
        }
      }
    }, 1000);
    $(this).mouseup(function(){
      clearTimeout(timeout);
    })
    $(this).mouseleave(function () {
      clearTimeout(timeout);
    })
  })
  //Shaking apps from the floating app menu
  $('body').on('click', '.fixedMenuFixedApp .menuOption.shaking', function(){
    $(this).parent().remove();
    $('#fixedApp').remove();
    $('.mainScreen').removeClass('filterBlur').addClass('shakingApps');
    $('.appScreen .app').append('<div class="removeApp"></div>');
  })
  //Exit app remover (shaking apps)
  $('.exitShake').click(function(){
    $('.mainScreen').removeClass('shakingApps');
    $('.appScreen .app .removeApp').remove();
  })
  
  //Remove app
  $('body').on('click', '.fixedMenuFixedApp .menuOption.remove', function () {
    let idApp = $('#fixedApp').data('id');
    if (idApp == undefined) {
      var idDeck = $('#fixedApp').data('indeck');
    }
    $(this).parent().remove();
    $('#fixedApp').remove();
    $('.mainScreen').removeClass('filterBlur');
    alertiOS({
      headers: `Move " ${idApp !== undefined ? globalState.apps[idApp].name : 'app'} " to App Library or delete the app?`,
      messages: 'Moving the app will remove it from the Home screen and keep all its data',
      actions: [
        {
          text: 'Delete app',
          warning: true,
          callback: function(){
            if (idApp !== undefined) {
              globalState.apps.splice(idApp, 1);
              renderUI();
            } else if (idDeck) {
              $('.deckApps .app[data-indeck="'+ idDeck +'"]').remove();
            }
          }
        },
        {
          text: 'Move to App Library',
          callback: function () { console.log('Pending Apps Library') }
        },
        {
          text: 'Cancel'
        },
      ]
    });
  })
  $('.appScreen').on('click', '.app .removeApp', function () {
    let idApp = $(this).parent('.app').data('id');
    if (idApp == 'undefined') {
      var idDeck = $(this).parent('.app').data('indeck');
    }
    $('.appScreen .app .removeApp').remove();
    $('.mainScreen').removeClass('shakingApps');
    alertiOS({
      headers: `Move " ${idApp !== undefined ? globalState.apps[idApp].name : 'app'} " to App Library or delete the app?`,
      messages: 'Moving the app will remove it from the Home screen and keep all its data',
      actions: [
        {
          text: 'Delete app',
          warning: true,
          callback: function () {
            if (idApp !== undefined) {
              globalState.apps.splice(idApp, 1);
              renderUI();
            } else if (idDeck) {
              $('.deckApps .app[data-indeck="' + idDeck + '"]').remove();
            }
          }
        },
        {
          text: 'Move to App Library',
          callback: function () { console.log('Pending Apps Library') }
        },
        {
          text: 'Cancel'
        },
      ]
    });
  })
  //Toggles ControlCenter Icons 
  $('.controlCenter .actionIcon').click(function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('airplaneMode')) {
      $(this).siblings('.cellularData, .wifi').removeClass('active');
    } else if ($(this).hasClass('cellularData') || $(this).hasClass('wifi')) {
      $(this).siblings('.airplaneMode').removeClass('active');
    }
  })
  
  $('body').on('click', '.app[data-app="appCamera"]', function () {
    camera();
  })

  $('body').on('click', '.app[data-app="appMusic"]', function () {
    music();
  })
  
$('body').on('click', '.app[data-app="appClock"]', function () {
    clock();
  })
$('body').on('click', '.app[data-app="appBendy"]', function () {
    bendy();
  })

$('body').on('click', '.app[data-app="appFacebook"]', function () {
    facebook();
  })

$('body').on('click', '.app[data-app="appApp Store"]', function () {
    appstore();
  })

$('body').on('click', '.app[data-app="appMessenger"]', function () {
    messenger();
  })

$('body').on('click', '.app[data-app="appTwitter"]', function () {
    twitter();
  })

$('body').on('click', '.app[data-app="appWhatsApp"]', function () {
    whatsapp();
  })


$('body').on('click', '.app[data-app="appReminders"]', function () {
    reminders();
  })

  $('body').on('click', '.app[data-app="appMaps"]', function () {
    maps();
  })
  
  $('body').on('click', '.app[data-app="appGoogle"]', function () {
    google();
  })
  
  $('body').on('click', '.app[data-app="appCalculator"]', function () {
   calculator();
  })

 $('body').on('click', '.app[data-app="appWidget"]', function () {
   widget();
  })

$('body').on('click', '.app[data-app="appCompass"]', function () {
   compass();
  })

$('body').on('click', '.app[data-app="appSettings"]', function () {
   settings();
  })

$('body').on('click', '.app[data-app="appApple Store"]', function () {
   applestore();
  })

  $('body').on('click', '.app[data-app="appWeather"]', function () {
   weather();
  })
  

  $('body').on('click', '.app[data-app="appCopilot"]', function () {
   copilot();
  })

 $('body').on('click', '.app[data-app="appTiktok"]', function () {
   tiktok();
  })

  $('body').on('click', '.app[data-app="appContacts"]', function () {
   contacts();
  })

  $('body').on('click', '.app[data-app="appSpotify"]', function () {
   spotify();
  })
  
  $('body').on('click', '.app[data-app="appMessage"]', function () {
   message();
  })
  
$('body').on('click', '.app[data-app="appCalendar"]', function () {
   calendar();
  })
  
$('body').on('click', '.app[data-app="appMinigame"]', function () {
   minigame();
  })

$('body').on('click', '.app[data-app="appFiles"]', function () {
   files();
  })

$('body').on('click', '.app[data-app="appNotes"]', function () {
   notes();
  })

  $('body').on('click', '.app[data-app="appYouTube"]', function () {
   youTube();
  })
  
  $('body').on('click', '.app[data-indeck="3"]', function () {
   message_deck();
  }) 
  
  $('body').on('click', '.app[data-indeck="4"]', function () {
   music_deck();
  })
  $('body').on('click', '.app[data-indeck="1"]', function () {
   appstore_deck();
  })

  
  $('.buttonTurn').click(function(){
    $(this).toggleClass('active');
    $('.iphone').toggleClass('showBackSide');
  })
  $('.touchID').click(function () {
    if (!$(this).hasClass('active')) {
      let sound = new Audio('../assets/Sound.mp3');
      sound.play();
    }
    $('#iOSAlert').remove();
    $(this).toggleClass('active');
    $('.mainScreen').toggleClass('locked');
  })
})

//Battery
const updateBattery = () => {
  navigator.getBattery().then((battery) => {
    $('.percent-value').text(`${Math.round(battery.level * 100)}%`);
    $('.shell .percent').css('width', `${battery.level * 100}%`);
  });
}
setInterval(updateBattery, 60000);
updateBattery();



function myfunc(){
   window.open("logoutPage.html");
  }
