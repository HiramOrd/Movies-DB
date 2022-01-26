import { FunctionComponent } from 'react';
import './section.scss';

interface Props {
    title: string;
}

export const Section: FunctionComponent<Props> = ({ title, children }) => {
    return (
        <div className="section">
            <h3>{title}</h3>
            {children}
        </div>
    );
};
