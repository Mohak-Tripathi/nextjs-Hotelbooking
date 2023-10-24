class APIFilters {
    query: any;
    queryStr: any;
  
    constructor(query: any, queryStr: any) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search(): APIFilters {
      const location = this.queryStr?.location
        ? {
            address: {
              $regex: this.queryStr.location,
              $options: "i",
            },
          }
        : {};
  
        // console.log(location, "location")

      this.query = this.query.find({ ...location });

// console.log("Helllo" , this.query, "this.query")
      return this;
    }
  
    filter(): APIFilters {
      const queryCopy = { ...this.queryStr };

      console.log(queryCopy, "qc")
  
      const removeFields = ["location", "page"];
      removeFields.forEach((el) => delete queryCopy[el]);
  
      this.query = this.query.find(queryCopy);
  
      return this;
    }
  
    pagination(resPerPage: number): APIFilters {
      const currentPage = Number(this.queryStr?.page) || 1;
      const skip = resPerPage * (currentPage - 1);
  
      this.query = this.query.limit(resPerPage).skip(skip);
  
      return this;
    }
  }
  
  export default APIFilters;