declare let axios;

export class News{
  getAll(): Promise<any>{
    const url: string = 'https://newsapi.org/v2/everything?q=Apple&from=2021-10-01&sortBy=popularity&apiKey=743cdd07be194806924204d85422c7b2';
    return axios.get(url);
  }
  getOne(keyWord): Promise<any>{
    const url: string = `https://newsapi.org/v2/everything?q=${keyWord}&from=2021-10-01&sortBy=popularity&apiKey=743cdd07be194806924204d85422c7b2`;
    return axios.get(url);
  }  
}
