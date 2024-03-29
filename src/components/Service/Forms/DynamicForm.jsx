import { AtvForm } from "./AtvForm";
import { CarRentalForm } from "./CarRentalForm";
import { SeaAdventuresForm } from "./SeaAdventuresForm";
import { GolfCartForm } from "./GolfCartForm";
import { MassageForm } from "./MassageForm";
import { RestaurantForm } from "./RestaurantForm";
import { ShuttleForm } from "./ShuttleForm";
import { ZipLineForm } from "./ZipLineForm";
import { YogaForm } from "./YogaForm";
import { HorseTourForm } from "./HorseTourForm";

export function DynamicForm({data, updateFields, serviceName, isFirstStep, currentStep}) {

    function Form(serviceName) {
       const key = serviceName.replace(/\s+/g, '').toLowerCase()
        switch (key) {
            case "privateshuttle": return <ShuttleForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} currentStep={currentStep} />
            case "carrental": return <CarRentalForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "restaurants": return <RestaurantForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "seaadventure": return <SeaAdventuresForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "atv": return <AtvForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "golfcart": return <GolfCartForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "zipline": return <ZipLineForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "massage": return <MassageForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "yoga": return <YogaForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
            case "horsetour": return <HorseTourForm {...data} updateFields={updateFields} isFirstStep={isFirstStep} />
        
            default: return <div>Default</div>
                
        }
    }

    return Form(serviceName)
}