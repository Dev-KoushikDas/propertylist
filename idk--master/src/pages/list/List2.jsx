import "./list2.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List2 = () => {


  const { data, loading} = useFetch(
    `/hotels?rating=5`
  );


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
       
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    
  );
};

export default List2;
