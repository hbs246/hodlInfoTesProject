import requests from 'requests';
import Data from '../models/data';
const fetchDataController = {

   fetchData(req,res){

    
        requests("https://api.wazirx.com/api/v2/tickers"
        ).on("data",async (chunk)=>{
            const objData = JSON.parse(chunk);

            let btcinr = {
                name : objData.btcinr.name,
                last : objData.btcinr.last,
                sell : objData.btcinr.sell,
                volume : objData.btcinr.volume,
                base_unit : objData.btcinr.base_unit,
            }
            let xrpinr = {
                name : objData.xrpinr.name,
                last : objData.xrpinr.last,
                sell : objData.xrpinr.sell,
                volume : objData.xrpinr.volume,
                base_unit : objData.xrpinr.base_unit,
            }
            let ethinr = {
                name  : objData.ethinr.name,
                last : objData.ethinr.last,
                sell : objData.ethinr.sell,
                volume : objData.ethinr.volume,
                base_unit : objData.ethinr.base_unit,
            }
            let trxinr = {
                name : objData.trxinr.name,
                last : objData.trxinr.last,
                sell : objData.trxinr.sell,
                volume : objData.trxinr.volume,
                base_unit : objData.trxinr.base_unit,
            }
            let eosinr = {
                name : objData.eosinr.name,
                last : objData.eosinr.last,
                sell : objData.eosinr.sell,
                volume : objData.eosinr.volume,
                base_unit : objData.eosinr.base_unit,
            }
            let zilinr = {
                name : objData.zilinr.name,
                last : objData.zilinr.last,
                sell : objData.zilinr.sell,
                volume : objData.zilinr.volume,
                base_unit : objData.zilinr.base_unit,
            }
            let omginr = {
                name : objData.omginr.name,
                last : objData.omginr.last,
                sell : objData.omginr.sell,
                volume : objData.omginr.volume,
                base_unit : objData.omginr.base_unit,
            }
            let batinr = {
                name : objData.batinr.name,
                last : objData.batinr.last,
                sell : objData.batinr.sell,
                volume : objData.batinr.volume,
                base_unit : objData.batinr.base_unit,
            }
            let polyinr = {
                name : objData.polyinr.name,
                last : objData.polyinr.last,
                sell : objData.polyinr.sell,
                volume : objData.polyinr.volume,
                base_unit : objData.polyinr.base_unit,
            }
            let iostinr = {
                name : objData.iostinr.name,
                last : objData.iostinr.last,
                sell : objData.iostinr.sell,
                volume : objData.iostinr.volume,
                base_unit : objData.iostinr.base_unit,
            }
             
            // const  = objData;
            const arrayData = [btcinr , xrpinr , ethinr , trxinr , eosinr , zilinr , batinr , omginr , polyinr , iostinr ];
            const top10Data = new Data({
                tags : arrayData
            });
            try {
             const result = await top10Data.save();   
            } catch (error) {
                return res.send(error);
            }
            return res.render('layout',{arrayData})
        }).on("end",(err)=>{
            if(err)
              return console.log('connection closed due to error');
              
        });      
    }
}

export default fetchDataController;