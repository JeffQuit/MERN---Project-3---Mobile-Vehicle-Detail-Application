import React, {useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import appointmentAPI from "../../utils/appointmentAPI.js"


//This page will display the compenent for the all of the upcoming appointments. 


//Use a card and add a table of all the upcoming appointments. 
// Create a button to change the state of completed to false. 
//Find a way to import data from the mongoDB and display only the appointments that are upcoming. 
export default function Basic() {

        // Setting our component's initial state
        // const [bookings, setBookings] = useState({})
        // const [rows, setRows] = useState([])
        const [datatable, setDatatable] = useState({})
          
        // Load all books and store them with setBooks
        useEffect(() => {
            loadBookings()
        }, [])
        
        //create a function to load the upcoming appointments (appointment completed = false)
        // Loads all bookings and sets them to bookings
        function loadBookings() {
        appointmentAPI.findAll()
          .then(res => {
            console.log(res.data)
             
            //  if(Object.keys(data).includes("iscompleted") === true) {
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
                  label: 'Email',
                  field: 'email',
                  width: 270,
                },
                {
                  label: 'Complete',
                  field: 'iscompleted',
                  width: 270,
                },
              ], rows : res.data,
            })
            // .catch(err => console.log(err));
          });
        }
            

        // Deletes a book from the database with a given id, then reloads bookings from the db
        function deleteBook(id) {
        appointmentAPI.remove(id)
          .then(res => loadBookings())
          .catch(err => console.log(err));
        }

 console.log( datatable)
    //I will have to set the rows here to the data from the data tables 
    //Create a button that will only appear if the completed status is false.

//Add Onclick button to hande the Change
  return(
      <div>
    <MDBDataTableV5 
        hover entriesOptions={[5, 20, 25]} 
        entries={5} 
        pagesAmount={4} 
        data={datatable}
    />
    </div>

  ) 
  
}