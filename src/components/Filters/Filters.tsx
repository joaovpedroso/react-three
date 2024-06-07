import { FC } from "react";
import { Button } from "src/components/Button";
import { EnumButtonStatus, EnumButtonVariants } from "src/components/Button/Button.types";
import { Exclamation, Thunderbolt } from "src/assets/icons/outlined";
import * as Style from './Filters.style';

const Filters: FC = () => (
    <Style.FiltersContainer>
        <Button variant={EnumButtonVariants.secondary} status={EnumButtonStatus["active-one"]}>
            <Thunderbolt color="#FFF" />
            Sensor de Energia
        </Button>
        <Button variant={EnumButtonVariants.secondary}>
            <Exclamation color="#2188FF" />
            Crítico
        </Button>
    </Style.FiltersContainer>
);

export {Filters};