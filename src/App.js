import Customer from './component/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': "https://placeimg.com/64/64/any",
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': "https://placeimg.com/64/64/2",
  'name': '이순신',
  'birthday': '951222',
  'gender': '남자',
  'job': '디자이너'
},
{
  'id': 3,
  'image': "https://placeimg.com/64/64/3",
  'name': '강감찬',
  'birthday': '971222',
  'gender': '남자',
  'job': '개발자'
}

]

function App() {
  return (
    <div>
      {
      customers.map(customers => {
        return (          
          <Customer 
            key={customers.id}
            id={customers.id}
            image={customers.image}
            name={customers.name}
            birthday={customers.birthday}
            gender={customers.gender}
            job={customers.job}
          />
        );
      })
    }
    </div>
  );
}

export default App;
