"use client";

import styles from "./Form.module.css";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

interface FormData {
  name: string;
  numberOfProcess: number;
  typeOfScheduling: string;
  sex: string;
  bornDate: string;
  age: number;
  numberOfService: number;
  numberOfSUS: number;
  address: string;
  isMinor: string;
  dateOfService: string;
  referencePoint: string;
  phone: string;
  dateOfTrip: string;
  dateOfScheduling: string;
  forecastReturn: number;
  predictedDays: string;
  typeOfService: string;
  specialty: string;
  user: string;
  doctorId: number;
  healthFacility: string;
  placeOfOrigin: string;
  destinationCity: string;
  hasACompanion: string;
  escortId: number;
  escortId2: number;
  typeOfDisplacement: string;
  transportCompany: string;
  totalOfTickets: number;
  pathID: number;
  dateOfRegister: string;
  timeOfRegister: string;
  serviceObservation: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    numberOfProcess: 0,
    typeOfScheduling: "",
    sex: "",
    bornDate: "",
    age: 0,
    numberOfService: 0,
    numberOfSUS: 0,
    address: "",
    isMinor: "",
    dateOfService: "",
    referencePoint: "",
    phone: "",
    dateOfTrip: "",
    dateOfScheduling: "",
    forecastReturn: 0,
    predictedDays: "",
    typeOfService: "",
    specialty: "",
    user: "",
    doctorId: 0,
    healthFacility: "",
    placeOfOrigin: "",
    destinationCity: "",
    hasACompanion: "",
    escortId: 0,
    escortId2: 0,
    typeOfDisplacement: "",
    transportCompany: "",
    totalOfTickets: 0,
    pathID: 0,
    dateOfRegister: "",
    timeOfRegister: "",
    serviceObservation: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <form id="my-form" className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              className={styles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Número do processo:
            <input
              className={styles.input}
              type="number"
              name="numberOfProcess"
              value={formData.numberOfProcess}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Tipo de atendimento:
            <input
              className={styles.input}
              type="text"
              name="typeOfScheduling"
              value={formData.typeOfScheduling}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Sexo:
            <input
              className={styles.input}
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Data de nascimento:
            <input
              className={styles.input}
              type="text"
              name="bornDate"
              value={formData.bornDate}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Idade:
            <input
              className={styles.input}
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Número de atendimento:
            <input
              className={styles.input}
              type="number"
              name="numberOfService"
              value={formData.numberOfService}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Número do cartão do SUS:
            <input
              className={styles.input}
              type="number"
              name="numberOfSUS"
              value={formData.numberOfSUS}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Endereço:
            <input
              className={styles.input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>Menor de idade:</label>
          <div>
            <label>
              <input
                type="radio"
                name="isMinor"
                value="yes"
                checked={formData.isMinor === "yes"}
                onChange={handleChange}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="isMinor"
                value="no"
                checked={formData.isMinor === "no"}
                onChange={handleChange}
              />
              Não
            </label>
          </div>
        </div>

        <div>
          <label>
            Data de atendimento:
            <input
              className={styles.input}
              type="text"
              name="dateOfService"
              value={formData.dateOfService}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Ponto de referência:
            <input
              className={styles.input}
              type="text"
              name="referencePoint"
              value={formData.referencePoint}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Telefone:
            <input
              className={styles.input}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Data da viagem:
            <input
              className={styles.input}
              type="text"
              name="dateOfTrip"
              value={formData.dateOfTrip}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Data do agendamento:
            <input
              className={styles.input}
              type="text"
              name="dateOfScheduling"
              value={formData.dateOfScheduling}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Previsão de retorno:
            <input
              className={styles.input}
              type="text"
              name="forecastReturn"
              value={formData.forecastReturn}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Dias previstos:
            <input
              className={styles.input}
              type="text"
              name="predictedDays"
              value={formData.predictedDays}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Tipo de atendimento:
            <input
              className={styles.input}
              type="text"
              name="typeOfService"
              value={formData.typeOfService}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Especialidade:
            <input
              className={styles.input}
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Usuário:
            <input
              className={styles.input}
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Identificação do médico:
            <input
              className={styles.input}
              type="text"
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Estabelecimento de saúde:
            <input
              className={styles.input}
              type="text"
              name="healthFacility"
              value={formData.healthFacility}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cidade de destino:
            <input
              className={styles.input}
              type="text"
              name="destinationCit"
              value={formData.destinationCity}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>Possui acompanhante:</label>
          <div>
            <label>
              <input
                type="radio"
                name="hasACompanion"
                value="yes"
                checked={formData.isMinor === "yes"}
                onChange={handleChange}
              />
              Sim
            </label>
            <label>
              <input
                type="radio"
                name="hasACompanion"
                value="no"
                checked={formData.isMinor === "no"}
                onChange={handleChange}
              />
              Não
            </label>
          </div>
        </div>

        <div>
          <label>
            Identificação do acompanhante 1
            <input
              className={styles.input}
              type="number"
              name="escortId"
              value={formData.escortId}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Identificação do acompanhante 2
            <input
              className={styles.input}
              type="number"
              name="escortId2"
              value={formData.escortId2}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Tipo de deslocamento
            <input
              className={styles.input}
              type="text"
              name="typeOfDisplacement"
              value={formData.typeOfDisplacement}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Empresa de tranporte
            <input
              className={styles.input}
              type="text"
              name="transportCompany"
              value={formData.transportCompany}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Total de passagens
            <input
              className={styles.input}
              type="text"
              name="totalOfTickets"
              value={formData.totalOfTickets}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Identificação do trajeto
            <input
              className={styles.input}
              type="number"
              name="pathID"
              value={formData.pathID}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Data do cadastro
            <input
              className={styles.input}
              type="text"
              name="dateOfRegister"
              value={formData.dateOfRegister}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Hora do cadastro
            <input
              className={styles.input}
              type="text"
              name="timeOfRegister"
              value={formData.timeOfRegister}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Observação do atendimento
            <input
              className={styles.input}
              type="text"
              name="serviceObservation"
              value={formData.serviceObservation}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>

      <div className="wrap">
        <button form="my-form" className={styles.button} type="submit">
          Enviar
        </button>
      </div>
    </div>
  );
}
