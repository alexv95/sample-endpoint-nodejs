

describe("Sample test",  ()=> {
     it('Gets the test endpoinpnt', async  ()=> {
      
        const res = await request.get('http://localhost:5000/api/user/blabla@cl')
    

        expect(res.body).toBe(null)
       
        }
     
     )


    }

   
  
)





describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})