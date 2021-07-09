import requests from 'requests';
import Data from '../models/data';
const fetchDataController = {

    fetchData(req, res) {


        requests("https://api.wazirx.com/api/v2/tickers"
        ).on("data", async (chunk) => {
            const objData = JSON.parse(chunk);

            // Get Only Values  From Object
            const ObjData = Object.values(objData);

            // Remove Additional Key From Array of Object
            ObjData.forEach( data => {
                 ["quote_unit","low","high","type","open","buy","at"].forEach( d => delete data[d]);
            });

            // Get only top 10 data from array of object;
            let dataArray = ObjData.slice(0,10);
          

            // Save Data into Database
            try {
                const top10Data = new Data({
                    tags: dataArray
                });
                const result = await top10Data.save();
            } catch (error) {
                return res.send(error);
            }
            // Send Response to Client
            return res.render('layout',{dataArray});
            
        }).on("end", (err) => {
            if (err)
                return console.log('connection closed due to error');

        });
    }
}

export default fetchDataController;
