import { observer } from "mobx-react-lite";
import { useStore } from "../Hooks/useStore"
import { useState } from "react";
import { Button,Form } from "react-bootstrap";





export  const UserDetailsComponent  = observer(()=> {

  const [text ,setText] = useState(' ')
  const {rootStore} = useStore()
  const {userDetailsStore} = rootStore;


  const searchUser = async () => {
    await userDetailsStore.fetchUserDetails(text)
       console.log(text)
     console.log(userDetailsStore.getUserDetails.html_url
        )

  }

    return (
        <>
        <div>

            UserName: {userDetailsStore.getUserDetails?.type} <br/>
            User-Location {userDetailsStore.getUserDetails?.id} 
        </div> 
        
        <Form>
      <Form.Group className="mb-3" controlId="UserName">
        <Form.Label>Search UserName</Form.Label>
        <Form.Control value = {text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Usedetails" />
      </Form.Group>
      <Button onClick = {searchUser} variant='primary'>Submit</Button>
    </Form>

    <div> 

    </div>
        </>
    )
})