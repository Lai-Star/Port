import React, { Component } from 'react';

export class AboutMyResume extends Component {

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <iframe className="h-full w-full" src="./files/tsangyulai.pdf#zoom=100#view=FitH" title="スキルシート＿赖仓钰" frameBorder="0"></iframe>
            </div>
        );
    }
}

export default AboutMyResume;

export const displayAboutResume = () => {
    return <AboutMyResume />;
}
