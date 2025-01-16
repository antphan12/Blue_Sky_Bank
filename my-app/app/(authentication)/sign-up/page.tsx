import AuthenticationForm from '@/components/AuthenticationForm';

const SignUp = async () => {
    return (
        <section className='flex-center size-full max-sm:px-6'>
            <AuthenticationForm type='sign-up'/>
        </section>
        )
    };

export default SignUp;