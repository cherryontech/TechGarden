import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import skillData from "../../data/SkillData";
import roleData from "../../data/RoleData";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import AdministrativeCompetencies from "./AdministrativeCompetencies";
import TechnicalProficiencies from "./TechnicalProficiencies";
import InterpersonalSkills from "./InterpersonalSkills";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SkillEvaluationStart({ onSubmit }) {
  const [selected, setSelected] = useState(null);
  const [cardsData, setCardsData] = useState([]);
  const [step, setStep] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setCardsData(roleData);
  }, []);

  const handleSkillChange = (newSelectedSkills) => {
    setSelectedSkills(newSelectedSkills);
  };

  const handleSubmit = () => {
    if (selectedSkills.length === 0) {
      setError("You must select at least one skill.");
      return;
    }
    setError("");
    onSubmit(selectedSkills);
    navigate("/career-recommendations");
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    if (step === 0 && !selected) {
      setError("You must select a role before proceeding.");
      return;
    }
    setError("");
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };

  const getCurrentSkill = () => {
    switch (step) {
      case 1:
        return skillData[0]; // Administrative
      case 2:
        return skillData[1]; // Technical Skills
      case 3:
        return skillData[2]; // Interpersonal Skills
      default:
        return null;
    }
  };

  return (
    <>
      <div className="text-center max-w-72	md:max-w-96 flex-row">
        {step === 0 && (
          <>
            <h2 className="text-2xl font-normal text-midnight-moss">
              Let&apos;s find your new tech position
            </h2>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <Label className="block text-base font-normal leading-6 text-midnight-moss py-6">
                    Input your current skills to uncover new career paths! See
                    where your expertise can be applied across various tech
                    fields and expand your opportunities.
                  </Label>
                  <div className="relative pt-6">
                    <ListboxButton className="relative w-full cursor-pointer rounded-md bg-light-gray py-3 pl-3 pr-10 text-left text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-oasis-blue sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        {selected ? (
                          <span className="ml-3 block truncate text-base">
                            {selected.title}
                          </span>
                        ) : (
                          <span className="ml-3 block text-base truncate text-gray-500">
                            Select your current position
                          </span>
                        )}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    <Transition
                      show={open}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <ListboxOptions className="absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-light-gray py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {cardsData.map((card, index) => (
                          <ListboxOption
                            key={index}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-tropical-cyan text-black"
                                  : "text-gray-500",
                                "relative cursor-pointer select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={card}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {card.title}
                                  </span>
                                </div>

                                {selected && (
                                  <span
                                    className={classNames(
                                      active
                                        ? "text-white"
                                        : "text-darker-cyan",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                )}
                              </>
                            )}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
            {error && (
              <div className="flex items-center text-red-600 bg-red-100 px-4 py-3 mt-4 rounded-md shadow-md">
                <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                <span>{error}</span>
              </div>
            )}
            <div className="pt-36 flex items-center">
              <button
                onClick={nextStep}
                className="rounded-md shadow-lg hover:bg-oasis-blue shadow-md text-base font-semibold text-midnight-moss bg-tropical-cyan justify-center w-full py-3"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      <div className="text-center flex-row my-36">
        {step > 0 && (
          <div className="max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-5xl">
            {step === 1 && (
              <AdministrativeCompetencies
                skills={getCurrentSkill()}
                selectedSkills={selectedSkills}
                handleSkillChange={handleSkillChange}
              />
            )}
            {step === 2 && (
              <TechnicalProficiencies
                skills={getCurrentSkill()}
                selectedSkills={selectedSkills}
                handleSkillChange={handleSkillChange}
              />
            )}
            {step === 3 && (
              <InterpersonalSkills
                skills={getCurrentSkill()}
                selectedSkills={selectedSkills}
                handleSkillChange={handleSkillChange}
              />
            )}
          </div>
        )}
        {step > 0 && (
          <div className="flex justify-between w-full p-4">
            <button
              onClick={goBack}
              className="rounded-md shadow-lg text-base font-semibold text-midnight-moss bg-light-gray hover:bg-darker-gray justify-center px-9 md:px-12 py-3"
            >
              Back
            </button>
            {error && (
              <div className="flex items-center text-red-600 bg-red-100 px-4 rounded-md shadow-md">
                <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                <span>{error}</span>
              </div>
            )}
            <button
              onClick={step === 3 ? handleSubmit : nextStep}
              className="rounded-md shadow-lg text-base font-semibold text-midnight-moss bg-tropical-cyan hover:bg-oasis-blue justify-center px-9 md:px-12 py-3"
            >
              {step === 3 ? "Find My Career" : "Next"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

SkillEvaluationStart.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SkillEvaluationStart;
