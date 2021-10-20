import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    //key:value
    state = {
       arrJobs: [
           {id: 'abcJob1', title: 'Developer', salary: '500 '},
           {id: 'abcJob2', title: 'Testers', salary: '400 '},
           {id: 'abcJob3', title: 'Project managers', salary: '1000'},

       ]
    }


    addNewJob = (job) => {
        console.log('check job from parent:', job)
        //let currenJobs = this.state.arrJobs;
        //currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJobs: currenJobs
        })  
    }

    deleteAJob = (job) =>{
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    /* componentDidUpdate(prevProps, prevState){
        console.log('>>> run didupate:', 'prev state:', prevState, 'current state:', this.state)
    }
    componentDidCatch(){
        
    } */
    /* 
    JSX => return block
    fragment
    */
   

   

    render() {


        
        return(
            <>
            <AddComponent
                addNewJob={this.addNewJob}
            />
              

               <ChildComponent 
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
               />
            </>
        )
    }
}

export default MyComponent;