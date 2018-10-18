/**
 * Created by o2o3 on 16/10/24.
 */
class Event {

    constructor(container, events) {

        this.container = container;
        this.events = events;


    }

    bindAll(evts) {
        let self = this;

        function getDomsByAttr(attr) {
            return self.container.find(`[${attr}]`);
        }

        if (getDomsByAttr('lva-touch').length > 0) {
            let touchs = getDomsByAttr('lva-touch');

            if (touchs.length == 1) {
                let attrVal = touchs.attr('lva-touch');
                touchs.bind('touchend', function (e) {
                    e.stopPropagation();
                    let eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY,
                    };
                    return self.events[attrVal].call(this, eve);
                });
            } else {
                touchs.each((i,v)=> {
                    let attrVal = $(v).attr('lva-touch');
                    $(v).bind('touchend', function (e) {
                        e.stopPropagation();
                        let eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY,
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }

        }

        if (getDomsByAttr('lva-click').length > 0) {
            let clicks = getDomsByAttr('lva-click');
            if (clicks.length == 1) {
                let attrVal = clicks.attr('lva-click');
                clicks.bind('click', function (e) {
                    e.stopPropagation();
                    let eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY,
                    };
                    return self.events[attrVal].call(this, eve);
                });
            } else {
                clicks.each((i,v)=> {
                    let attrVal = $(v).attr('lva-click');
                    $(v).bind('click', function (e) {
                        e.stopPropagation();
                        let eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY,
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }


        }


        if (getDomsByAttr('lva-swiper-right').length > 0) {
            let swipeL = getDomsByAttr('lva-swiper-right');
            if (swipeL.length == 1) {
                let attrVal = swipeL.attr('lva-swiper-right');
                swipeL.on('swipeRight', function (e) {
                    e.stopPropagation();
                    let eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY,
                    };
                    return self.events[attrVal].call(this, eve);
                });
            } else {
                swipeL.each((i,v)=> {
                    let attrVal = $(v).attr('lva-swiper-right');
                    $(v).on('swipeRight', function (e) {
                        e.stopPropagation();
                        let eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY,
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }


        }

    }

}

export default Event;
