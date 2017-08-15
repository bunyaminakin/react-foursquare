import superagent from "superagent";

const apiConfig = {
  apiParams: {
    client_id: "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK",
    client_secret: "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF",
    v: "20170802"
  },
  getVenues(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.venue);
                }, (err) => {
                  console.log(err.message);
                  reject(err);
                });
    });
  },
  getVenuePhotos(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.photos.items);
                }, (err) => {
                  console.log(`OPS ${err.message}`);
                  reject(err);
                });
    });

  },
  getVenueTips(url, params) {
    return new Promise((resolve, reject) => {
      superagent
                .get(url)
                .query(params)
                .set("Accept", "application/json")
                .then((data) => {
                  resolve(data.body.response.venue.tips.groups[0].items);
                }, (err) => {
                  console.log(`OPS ${err.message}`);
                  reject(err);
                });
    });
  }
};

export default apiConfig;
