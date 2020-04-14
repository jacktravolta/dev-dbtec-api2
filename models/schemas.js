function schema(model)
{
        console.log("-----------------------")
        console.log(model);

        if (model == "user")
        {

 
            var cols = [
                {field:'_id',title:'_id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'name',title:'Nombres',width:100,validate:'',required:'true',tipodato:'easyui-textbox',url:''},
                {field:'apellido_paterno',title:'apellido_paterno',width:100,validate:'',required:'true',tipodato:'easyui-textbox',url:''},
                {field:'apellido_materno',title:'Apellido_materno',width:100,validate:'',required:'true',tipodato:'easyui-textbox',url:''},

                {field:'email',title:'Correo',width:100,validate:'email',required:'true',tipodato:'easyui-textbox',url:''},
                {field:'phone',title:'Teléfono',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-textbox',url:''},
                {field:'city',title:'Ciudad',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-textbox',url:''},
                {field:'password',title:'Contraseña',tipodatolst:'easyui-hidden',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-passwordbox',url:''},
                {field:'country',title:'Páis',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-combobox',url:'https://restcountries.eu/rest/v2/all'},
                {field:'fecha_nacimiento',title:'Fecha Nacimiento',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-textbox',url:''},
 
                {field:'role',title:'Rol',width:100,align:'right',validate:'',required:'true',tipodato:'easyui-combobox',url:'http://13.59.238.142:4000/users'},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];
        }

        if (model == "tsa_aeronave")
        {

            //Array para tsa_aeronave
            var cols = [
                {field:'_id',title:'_id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_aeronave',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_aeronave',title:'Código Aeronave',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_matricula',title:'Código Matrícula',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_vuelo',title:'Horas Vuelo',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_tipo_aeronave',title:'Tipo Aeronave',width:100,validate:'',required:'false',tipodato:'easyui-combobox',url:'http://13.59.238.142:4000/tsa_tipoaeronave'},
                {field:'id_asignacion_aerea',title:'Asignacion Aerea',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_aeronave',title:'Descripción Aeronave',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];
            
        }  
        if (model == "tsa_asignacionaerea")
        {

            //Array para tsa_asignacionaerea
            var cols = [
                {field:'_id',title:'_id',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_asignacion_aerea',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_organizacion_aerea',title:'ID. organizacion Aerea',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_asignacion_aerea',title:'COD. Asignación Aerea',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_asignacion_aerea',title:'Descripción',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];

        }




        //if (model == "tsa_componenteppalaeronave")
        if (model == "tsa_tipocomponenteppal")            
        {

            //Array para tsa_asignacionaerea
            var cols = [
                {field:'_id',title:'_id',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_aeronave',title:'id_aeronave',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_tipo_componente_ppal',title:'id_tipo_componente_ppal',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'corr_componente_ppal',title:'COD. Asignación Aerea',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'horas_componente',title:'horas_componente',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_actuales',title:'horas_actuales',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_restantes',title:'horas_restantes',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_fabricante',title:'cod_fabricante',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'part_number_fabricante',title:'part_number_fabricante',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'descr_componente_ppal',title:'descr_componente_ppal',width:100,align:'right',validate:'',required:'false',tipodato:'easyui-textarea',url:''},


                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];

        }


        if (model == "tsa_lugaresrutavuelo")
        {

            //Array para tsa_asignacionaerea
            var cols = [
                {field:'_id',title:'_id',width:100,validate:'',required:'false',tipodatolst:'easyui-hidden',tipodato:'easyui-hidden',url:''},
                {field:'id_bitacora_vuelo',title:'id',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_ruta_bitacora_vuelo',title:'Ruta Botacora Vuelo',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_lugar',title:'Lugar',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'clas_orig_dest',title:'Destino',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},

                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-textbox',url:''}
            ];

        }


        if (model == "tsa_lugares")
        {

            //Array para tsa_asignacionaerea
            var cols = [
                {field:'_id',title:'_id',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_lugar',title:'id',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_lugar',title:'Cod. Lugar',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'georref_latitud',title:'Geo. Ref. Latitud',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'georref_longitud',title:'Geo. Ref. Longitud',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'latitud',title:'Latitud',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'longitud',title:'Longitud',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_tipo_lugar',title:'Tipo Lugar',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_lugar',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},


                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];

        }


        if (model == "tsa_organizacionaerea")
        {

            //Array para tsa_organizacionaerea
            var cols = [
                {field:'_id',title:'_id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_organizacion_aerea',title:'ID',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_asignacion_aerea',title:'Cod. Asignación Aerea',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_asignacion_aerea',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},

                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];

        }


        if (model == "tsa_pilotos")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_piloto',title:'ID',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_piloto',title:'Código',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'nom_piloto',title:'Nombres',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'ape_piloto',title:'Apellidos',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'fec_nacimiento',title:'Fecha Nacimiento',width:100,validate:'',required:'false',tipodato:'easyui-datebox',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}
            ];

        }


        if (model == "tsa_pilotosvuelo")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_pilotos_vuelo',title:'ID',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},

                {field:'id_bitacora_vuelo',title:'Bitacora Vuelo',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_piloto',title:'Piloto',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_tipo_piloto',title:'Código tipo piloto',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];

        }


        if (model == "tsa_solicitante")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',width:100,validate:'',required:'false',tipodatolst:'easyui-hidden',tipodato:'easyui-hidden',url:''},
                {field:'id_solicitante',title:'ID',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-hidden',url:''},

                {field:'cod_solicitante',title:'Código Solicitante',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_solicitante',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];

        }

        if (model == "tsa_tipoaeronave")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',tipodatolst:'easyui-hidden', width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_tipo_aeronave',title:'ID',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},

                {field:'cod_tipo_aeronave',title:'Código tipo',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'check_tiene_alas',title:'¿Tiene alas?',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'check_tiene_turbina',title:'¿Tiene Turbina?',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'check_tiene_motor',title:'¿Tiene Motor?',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'check_tiene_aspas',title:'¿Tiene Aspas?',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_tipo_aeronave',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},


                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];

        }


        if (model == "tsa_tipolugar")
        {
 
            //Array para tsa_pilotos 
            var cols = [
                {field:'_id',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_tipo_lugar',title:'ID',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_tipo_lugar',title:'Código tipo lugar',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_tipo_lugar',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];
        }

        //model = "tsa_tipomision";
        if (model == "tsa_tipomision")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_tipo_mision',title:'ID',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'cod_tipo_mision',title:'Código tipo mision',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_tipo_mision',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];

        }


        if (model == "tsa_tipouso")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                //{field:'kilometros',title:'kilometros',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_tipo_uso',title:'Código tipo uso',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'desc_tipo_uso',title:'Descripción',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];
        }

        if (model == "tsa_bitacoravuelo")
        {

            //Array para tsa_pilotos
            var cols = [

                {field:'_id',title:'id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_bitacora_vuelo',title:'id',width:100,tipodatolst:'easyui-hidden', validate:'',required:'false', tipodato:'easyui-hidden',url:''},
                {field:'id_tipo_mision',title:'id_tipo_mision',width:100,validate:'',tipodatolst:'easyui-hidden', required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_solicitante',title:'id_solicitante',width:100,validate:'',tipodatolst:'easyui-hidden', required:'false',tipodato:'easyui-textbox',url:''},

                {field:'fecha_vuelo',title:'Fecha',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_matricula',title:'Matrícula',width:100,validate:'',tipodatolst:'easyui-textbox',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'num_hojavuelo',title:'Nº Hoja Vuelo',width:100,validate:'',tipodatolst:'easyui-textbox',required:'false',tipodato:'easyui-textbox',url:''},


                {field:'id_piloto',title:'Piloto',width:100,validate:'',tipodatolst:'easyui-textbox', required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_copiloto',title:'Copiloto',width:100,validate:'',tipodatolst:'easyui-hidden', required:'false',tipodato:'easyui-textbox',url:''},


                {field:'id_tipo_uso',title:'Tipo Uso',width:100,validate:'',tipodatolst:'easyui-textbox',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cod_bitacora_vuelo',title:'cod_bitacora_vuelo',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
               
                
                {field:'horas_actuales',title:'Horas',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'ciclo',title:'Ciclo',width:100,validate:'',tipodatolst:'easyui-hidden',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'fecha_registro',title:'Fecha',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},

                {field:'horas_anteriores',title:'Horas_anteriores',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},


                {field:'horas_ifr',title:'Horas_IFR',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_vfr',title:'Horas_VFR',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cant_partidas',title:'Cant_Partidas' ,tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'cant_aterrizaje',title:'Cant_Aterrizaje',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'observaciones',title:'Observaciones',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'discrepancias',title:'Discrepancias',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textarea',url:''},

                {field:'act',title:'Acciones',width:'200px',align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}


            ];

        }

        if (model == "tsa_rutabitacoravuelo")
        {


            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',width:100,tipodatolst:'easyui-hidden',tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_bitacora_vuelo',title:'id_bitacora_vuelo',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'id_origen',title:'Origen',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_destino',title:'Destino',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},


                {field:'id_ruta_bitacora_vuelo',title:'id_ruta_bitacora_vuelo',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'fecha_salida',title:'Fecha Salida',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'hora_salida',title:'Hora Salida',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},


                {field:'min_salida',title:'min_salida',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'fecha_llegada',title:'Fecha Llegada',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'hora_llegada',title:'Hora Llegada',width:100,tipodatolst:'easyui-textarea',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'kilometros',title:'kilometros',width:100,tipodatolst:'easyui-textarea',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'altitud_aterrizaje',title:'altitud_aterrizaje',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'horas',title:'horas',width:100,tipodatolst:'easyui-textarea',validate:'',required:'false',tipodato:'easyui-textbox',url:''},


                {field:'min_llega',title:'min_llega',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'ciclos',title:'ciclos',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_ifr',title:'Horas IFR',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'horas_vrf',title:'Horas VFR',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];

        }


 
        if (model == "tsa_combustiblebitacoravuelos")
        {

            var cols = [
                {field:'_id',title:'id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_bitacora_vuelo',title:'id_bitacora_vuelo',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'n_guia',title:'Nº guía',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cant_ant_cargar',title:'Cantidad a Cargar',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cant_cargada',title:'Cantidad Cargada',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_lugar',title:'Lugar',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'turnos',title:'Turnos',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'id_responsable',title:'id_responsable',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'monto',title:'Monto',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},

                {field:'id_combustible_bitacora_vuelo',title:'id_combustible_bitacora_vuelo',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'observaciones',title:'observaciones',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},


         

                {field:'act',title:'Acciones',width:100,align:'center',tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];
        }

        if (model == "tsa_pasajeroscargabitacoravuelos")
        {


            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                {field:'id_bitacora_vuelo',title:'id_bitacora_vuelo',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'tipo_pasajero',title:'Tipo Pasajero',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'cargo_pasajero',title:'Cargo Pasajero',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'nombres_pasajero',title:'Nombres Pasajero',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'apellido_paterno_pasajero',title:'Apellido Paterno ',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'apellido_materno_pasajero',title:'Apellido Materno',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'tipo_tripulacion',title:'Tipo tripulación',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'categoria_pasajego',title:'Categoria Pasajero',width:100,tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'peso',title:'Peso',width:100,tipodatolst:'easyui-hidden',validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',tipodatolst:'easyui-textbox',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];
        }

        if (model == "tsa_notificaciones")
        {

            //Array para tsa_pilotos
            var cols = [
                {field:'_id',title:'id',tipodatolst:'easyui-hidden',width:100,validate:'',required:'false',tipodato:'easyui-hidden',url:''},
                //{field:'kilometros',title:'kilometros',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'tabla',title:'Modelo',width:100,validate:'',required:'false',tipodato:'easyui-textbox',url:''},
                {field:'campo',title:'Campo',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                //{field:'id_responsable',title:'Responsable',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'alerts',title:'Alerta',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'estado',title:'Estado',width:100,validate:'',required:'false',tipodato:'easyui-textarea',url:''},
                {field:'act',title:'Acciones',width:100,align:'center',validate:'',required:'false',tipodato:'easyui-hidden',url:''}

            ];
        }
        return  cols;

} 
exports.schema=schema;

