import moment from 'moment';


export default (expenses,{text,sortBy,startDate, endDate})=>{


    return expenses.filter((expense)=>{
    //    console.log(expense)
        const createdAtMoment = moment(expense.createdAt);
      //  const startDateMatch = typeof startDate !=='number'|| expense.createdAt>= startDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day'): true;
        const textMatch = typeof text!=='string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch &&  textMatch;
    }).sort((expense1,expense2,)=>{

        if(sortBy==='date'){
          //  console.log(`checking which date is bigger ${expense1.createdAt}vs ${expense2.createdAt}`)
            return expense1.createdAt< expense2.createdAt?1:-1;
        }if(sortBy==='amount'){
            return expense1.amount>expense2.amount?-1:1;
        }
    });
}
