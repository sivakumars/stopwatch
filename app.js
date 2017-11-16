$(function(){
    console.log('****App.js*****');
    const app ={
        $togglebutton : $('#toggle'),
        $resetbutton  : $('#reset'),
        isWatchOn     : false,
        hours         : 0,
        mins          : 0,
        secs          : 0,
        centisecs     : 0,

        startStop     : function(){
            console.log('Inside startstop');
            if(!this.isWatchOn){
                this.isWatchOn = true;
                this.start();                
            }else{
                this.isWatchOn = false;
                this.stop();                
            }
        },

        start        : function(){
            console.log('Inside start');
            this.$togglebutton.text('STOP');
            this.interval = setInterval(this.starttimer.bind(this),10);
        },

        starttimer   : function(){
            this.centisecs++;
            if(this.centisecs == 100){
                this.secs++;
                this.centisecs=0;
                if(this.secs == 60){
                    this.mins++;
                    this.secs=0;
                    if(this.mins == 60){
                        this.mins=0;
                        this.hours++;
                    }
                }
            }
            this.displayTime();
        },

        stop      : function(){
            console.log('Inside stop');            
            clearInterval(this.interval);
            this.$togglebutton.text('START');
        },

        reset     : function(){
            console.log('Inside reset');
            this.isWatchOn && this.stop();

            this.centisecs = 0;
            this.secs = 0;
            this.mins = 0;
            this.hours = 0;

            this.displayTime();
        },

        displayTime : function(){
            $('#centisecs').text((this.centisecs < 10)?'0'+ this.centisecs : this.centisecs);
            $('#secs').text((this.secs < 10)?'0'+ this.secs : this.secs);
            $('#mins').text((this.mins < 10)?'0'+ this.mins : this.mins);
            $('#hours').text((this.hours < 10)?'0'+ this.hours : this.hours);
        },

        init : function(){
            console.log(this);
            this.$togglebutton.on('click', this.startStop.bind(this));
            this.$resetbutton.on('click', this.reset.bind(this));
        }
    }

    app.init();
});