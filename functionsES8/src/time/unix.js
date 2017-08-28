export const getTimesInUnix = (functions,admin) => {
  return functions.https.onRequest((req, res) => {
    const moment = require('moment');
    const {startTime, endTime} = req.body;
    const start = moment(start).valueOf();
    const end = moment(end).valueOf();
    return {
      startTime: start,
      endTime:  end,
      duration: end - start
    };
  });
};

export const sortByTime = (obj) => Object.keys(obj)
  .sort((x, y) => x - y)
  .reduce((a, b) => (Object.assign(a, {[b]: obj[b]})), {});
