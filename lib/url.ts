
import qs  from 'query-string'



interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params);
  queryString[key] = value;


  const query = qs.stringify(queryString);
//   return `${window.location.pathname}${query ? `?${query}` : ''}`;
  
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};



interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];

}

export const RemoveUrlQueryParams=({params,keysToRemove}:RemoveUrlQueryParams)=>{
  const queryString = qs.parse(params);
  // const keys = keysToRemove.split(',');

  keysToRemove.forEach(key => {
    delete queryString[key];
  });

  const query = qs.stringify(queryString);
//   return `${window.location.pathname}${query ? `?${query}` : ''}`;
    // { skipNull: true }
  
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
}