import AuthenticationForm from '@/components/AuthenticationForm';
import React from 'react';

const SignIn = () => {
    return (
        <section className='flex-center size-full max-sm:px-6'>
            <AuthenticationForm type='sign-in'/>
        </section>
        )
    };

export default SignIn;