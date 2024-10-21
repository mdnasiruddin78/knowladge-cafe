import profile from '../../assets/images/profile.png'

const header = () => {
    return (
        <header className='flex justify-between w-11/12 mx-auto items-center p-4 border-b-2'>
           <h1 className='text-4xl font-bold'>knowladge cafe</h1>
           <img src={profile} alt="" /> 
        </header>
    );
};

export default header;