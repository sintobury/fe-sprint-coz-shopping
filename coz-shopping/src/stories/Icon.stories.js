import { Icon } from "./Icon";
import { IconNames } from "./Icon";

export default {
    title: 'Atoms/Icons',
    component: Icon,
    parameters: {
        background: { default: { value: 'light' } },
        controls: { hideNoControlsWarning: true },
    },
};

export const All = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}>
        {IconNames.map((icon) => (
            <Icon icon={icon} key={icon} />
        ))}
    </div>
);

export const Item = (args) => <Icon {...args} />;
Item.argTypes = {
    icon: {
        options: IconNames,
        controls: { type: 'select' },
    },
};

Item.args = {
    icon: 'Menu'
}