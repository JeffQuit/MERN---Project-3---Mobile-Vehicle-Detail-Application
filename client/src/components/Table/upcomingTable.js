import React, {useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import appointmentAPI from "../../utils/appointmentAPI.js";

//This page will display the compenent for the all of the upcoming appointments. 

//Use a card and add a table of all the upcoming appointments. 
// Create a button to change the state of completed to false. 
//Find a way to import data from the mongoDB and display only the appointments that are upcoming. 
export default function Basic() {

       // Setting our component's initial state
       const [rows, setRows] = useState([]);
       const [datatable, setDatatable] = useState({});

       // Load all books and store them with setBooks
       useEffect(loadBookings, []);
       
        //The setRows function sets the rows with the data returned from db based on 
        // iscompleted = false && if the date requested is greater than the current date
        // Loads all bookings and sets them to bookings
       function loadBookings() {
       appointmentAPI.findAll()
         .then(res => {
            setRows(() => { 
              for(let datas of res.data) {
                   // Get today's date
                let todaysDate = new Date();
                
                let dateReq = datas.datereq;
                
                dateReq = new Date(dateReq);
                 
                if (datas.iscompleted === false && dateReq > todaysDate ) {
                  datas.iscompleted = true;
                    rows.push(datas)
                 }
              }
           })
          //  console.log(rows);

            //sets the columns and rows with the data returned
           setDatatable({columns: [
               {
                 label: 'Name',
                 field: 'name',
                 width: 150,
                 attributes: {
                   'aria-controls': 'DataTable',
                   'aria-label': 'Name',
                 },
               },
               {
                 label: 'Phone',
                 field: 'phone',
                 width: 270,
               },
               {
                 label: 'Adress',
                 field: 'address1', 
                 width: 200,
               },
               {
                 label: 'Zip',
                 field: 'zip',
                 width: 200,
               },
               {
                 label: 'City',
                 field: 'city',
                 sort: 'disabled',
                 width: 100,
               },
               {
                 label: 'Date',
                 field: 'datereq',
                 sort: 'asc',
                 width: 100,
               },
               {
                 label: 'Time',
                 field: 'timereq',
                 sort: 'disabled',
                 width: 150,
               },
               {
                label: 'Service',
                field: 'servicerequested',
                sort: 'disabled',
                width: 150,
              },
               {
                 label: 'Email',
                 field: 'email',
                 width: 270,
               },
             ], rows : rows,
            });

         });
       }

  return(
  
      <div>
        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
        />
        </div>
    );  
}
