"use client";

import styles from "./Form.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Por favor, informe um nome válido"),
  numberOfProcess: z.number().min(2, "Por favor, informe um número válido"),
  typeOfScheduling: z.string().min(3, "Por favor, informe um tipo válido"),
  sex: z.string().min(3, "Por favor, informe o sexo corretamente"),
  bornDate: z.date(),
  age: z.number().min(2, "Por favor, informe uma idade válida"),
  numberOfService: z.number().min(2, "Por favor, informe um número válido"),
  numberOfSUS: z.number().min(2, "Por favor, informe um número válido"),
  address: z.string().min(3, "Por favor, informe um endereço válido"),
  dateOfService: z.date(),
  referencePoint: z.string().min(3, "Por favor, informe um ponto de referência válido"),
  phone: z.string().min(9, "Por favor, informe um telefone válido"),
  dateOfTrip: z.date(),
  dateOfScheduling: z.date(),
  forecastReturn: z.number().min(2, "Por favor, informe um número válido"),
  predictedDays: z.string().min(1, "Por favor, informe um dia válido"),
  typeOfService: z.string().min(5, "Por favor, informe um tipo válido"),
  specialty: z.string().min(5, "Por favor, informe uma especialidade válida"),
  user: z.string().min(5, "Por favor, informe um usuário válido"),
  doctorId: z.number().min(2, "Por favor, informe uma identificação válida"),
  healthFacility: z.string().min(5, "Por favor, informe um estabelecimento válido"),
  placeOfOrigin: z.string().min(5, "Por favor, informe um local válido"),
  destinationCity: z.string().min(5, "Por favor, informe um local válido"),
  escortId: z.number().min(2, "Por favor, informe uma identificação válida"),
  escortId2: z.number().min(2, "Por favor, informe uma identificação válida"),
  typeOfDisplacement: z.string().min(5, "Por favor, informe um tipo válido"),
  transportCompany: z.string().min(5, "Por favor, informe uma empresa válida"),
  totalOfTickets: z.number().min(1, "Por favor, informe um número válido"),
  pathID: z.number().min(2, "Por favor, informe uma identificação válida"),
  dateOfRegister: z.date(),
  timeOfRegister: z.string().min(4, "Por favor, informe uma hora válida"),
  serviceObservation: z.string().min(5, "Por favor, informe uma observação válida")
});

type FormDataProps = z.infer<typeof schema>;

export default function Form() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const handleSubmitForm = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form
        id="my-form"
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <input
            className={styles.input}
            {...register("name")}
            type="text"
            placeholder="Informe seu nome"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("numberOfProcess")}
            type="text"
            placeholder="Informe o número do processo"
          />
          {errors.numberOfProcess && <p>{errors.numberOfProcess.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("typeOfScheduling")}
            type="text"
            placeholder="Informe o tipo de agendamento"
          />
          {errors.typeOfScheduling && <p>{errors.typeOfScheduling.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("sex")}
            type="text"
            placeholder="Informe o seu sexo"
          />
          {errors.sex && <p>{errors.sex.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Informe a sua data de nascimento</label>
          </div>
          <input
            className={styles.input}
            {...register("bornDate")}
            type="date"
            placeholder="Informe a sua data de nascimento"
          />
          {errors.bornDate && <p>{errors.bornDate.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("age")}
            type="number"
            placeholder="Informe a sua idade"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("numberOfService")}
            type="number"
            placeholder="Informe o seu número de atendimento"
          />
          {errors.numberOfService && <p>{errors.numberOfService.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("numberOfSUS")}
            type="number"
            placeholder="Informe o seu número de cartão do SUS"
          />
          {errors.numberOfSUS && <p>{errors.numberOfSUS.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("address")}
            type="text"
            placeholder="Informe o seu endereço"
          />
          {errors.address && <p>{errors.address.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Menor de idade ?</label>
          </div>
          <div>
            <input type="radio" id="sim" name="menor-idade" value="sim" />
            <label>Sim</label>
            <br></br>
            <input type="radio" id="sim" name="menor-idade" value="não" />
            <label>Não</label>
            <br></br>
          </div>
        </div>

        <div className={styles.label}>
          <div>
            <label>Informe a sua data de atendimento</label>
          </div>
          <input
            className={styles.input}
            {...register("dateOfService")}
            type="date"
            placeholder="Informe a sua data de nascimento"
          />
          {errors.dateOfService && <p>{errors.dateOfService.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("referencePoint")}
            type="text"
            placeholder="Informe o ponto de referência"
          />
          {errors.referencePoint && <p>{errors.referencePoint.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("phone")}
            type="text"
            placeholder="Informe o telefone"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Data da viagem</label>
          </div>
          <input
            className={styles.input}
            {...register("dateOfTrip")}
            type="date"
            placeholder="Informe a sua data de viagem"
          />
          {errors.dateOfTrip && <p>{errors.dateOfTrip.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Data do agendamento</label>
          </div>
          <input
            className={styles.input}
            {...register("dateOfScheduling")}
            type="date"
            placeholder="Informe a sua data de agendamento"
          />
          {errors.dateOfScheduling && <p>{errors.dateOfScheduling.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("forecastReturn")}
            type="number"
            placeholder="Previsão de retorno"
          />
          {errors.forecastReturn && <p>{errors.forecastReturn.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("predictedDays")}
            type="text"
            placeholder="Dias previstos"
          />
          {errors.predictedDays && <p>{errors.predictedDays.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("typeOfService")}
            type="text"
            placeholder="Tipo de atendimento"
          />
          {errors.typeOfService && <p>{errors.typeOfService.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("specialty")}
            type="text"
            placeholder="Especialidade"
          />
          {errors.specialty && <p>{errors.specialty.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("user")}
            type="text"
            placeholder="Usuário"
          />
          {errors.user && <p>{errors.user.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("doctorId")}
            type="number"
            placeholder="Identificação do médico"
          />
          {errors.doctorId && <p>{errors.doctorId.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("healthFacility")}
            type="text"
            placeholder="Estabelecimento de saúde"
          />
          {errors.healthFacility && <p>{errors.healthFacility.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("placeOfOrigin")}
            type="text"
            placeholder="Estabelecimento de saúde"
          />
          {errors.placeOfOrigin && <p>{errors.placeOfOrigin.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("destinationCity")}
            type="text"
            placeholder="Cidade de destino"
          />
          {errors.destinationCity && <p>{errors.destinationCity.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Possui acompanhante?</label>
          </div>
          <div>
            <input type="radio" id="sim" name="menor-idade" value="sim" />
            <label>Sim</label>
            <br></br>
            <input type="radio" id="sim" name="menor-idade" value="não" />
            <label>Não</label>
            <br></br>
          </div>
        </div>

        <div>
          <input
            className={styles.input}
            {...register("escortId")}
            type="number"
            placeholder="Identificação do acompanhante 1"
          />
          {errors.escortId && <p>{errors.escortId.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("escortId2")}
            type="number"
            placeholder="Identificação do acompanhante 2"
          />
          {errors.escortId2 && <p>{errors.escortId2.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("typeOfDisplacement")}
            type="text"
            placeholder="Tipo de deslocamento"
          />
          {errors.typeOfDisplacement && <p>{errors.typeOfDisplacement.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("transportCompany")}
            type="text"
            placeholder="Empresa de tranporte"
          />
          {errors.transportCompany && <p>{errors.transportCompany.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("totalOfTickets")}
            type="number"
            placeholder="Total de passagens"
          />
          {errors.totalOfTickets && <p>{errors.totalOfTickets.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("pathID")}
            type="number"
            placeholder="Identificação do trajeto"
          />
          {errors.pathID && <p>{errors.pathID.message}</p>}
        </div>

        <div className={styles.label}>
          <div>
            <label>Data do cadastro</label>
          </div>
          <input
            className={styles.input}
            {...register("dateOfRegister")}
            type="date"
            placeholder="Data do cadastro"
          />
          {errors.dateOfRegister && <p>{errors.dateOfRegister.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("timeOfRegister")}
            type="number"
            placeholder="Hora do cadastro"
          />
          {errors.timeOfRegister && <p>{errors.timeOfRegister.message}</p>}
        </div>

        <div>
          <input
            className={styles.input}
            {...register("serviceObservation")}
            type="number"
            placeholder="Observação do atendimento"
          />
          {errors.serviceObservation && <p>{errors.serviceObservation.message}</p>}
        </div>

        {/* 
            DADOS DO AGENDAMENTO
            Observação do atendimento

        */}
      </form>

      <div className="wrap">
        <button form="my-form" className={styles.button} type="submit">
          Enviar
        </button>
      </div>
    </div>
  );
}
