import grey from '../Assets/grey.png'
import red from '../Assets/red.jpg'
import '../Style/Description.css'


function description(props) {

    let newlist= props.newlist;

    let rate = [];
    let index;

    for (index = 0; index < newlist[0].rating; index++) {
        rate[index] = { key: index, value: red }
    }
    for (index; index < 5; index++) {
        rate[index] = { key: index, value: grey }
    }
    let tags = newlist[0].tags

    return (
        <div className='Description'>
            <div className='left'>
                <div className='Title'>{newlist[0].title}</div>
                <div className='location'>{newlist[0].location}</div>
                <div className='tags'>{tags.map((tags) => (
                    <div key={tags} className='tag'>{tags}</div>
                ))} </div>
            </div>
            <div  className='right'>
                <div className='user'><span>{newlist[0].host.name}</span><img src={newlist[0].host.picture} alt={newlist[0].host.name} /></div>
                <div className='rating'>{rate.map((rate) => (
                    <img key={rate.key} src={rate.value} alt="rating" />
                ))}</div>
            </div>

        </div>
    )
}

export default description