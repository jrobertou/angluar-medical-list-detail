var server = require('json-server');
global.reportBasePath = 'public/reports/';

server.low.db = {
	patients: [{
		id: 35,
		lastName: "Malade",
		firstName: "Jeanne",
		gender: "F",
		dateOfBirth: "1967-06-01T00:00:00+0200",
		examsList: [{
			id: 18,
			radiologistInCharge: "Jean Michel",
			creationDate: "2015-01-30T23:30:00+0100",
			nbDicoms: 45,
			stateReport: "Interprété",
			reportPath: reportBasePath + "CR_Sein_18.pdf",
			acts: ['Thorax'],
			hospital: {
				id: 28,
				name: "Centre Hospitalier de Papeete",
				address: "Centre Hospitalier de Papeete - Rue principale 98713 Papeete",
				phoneNumber: "+33 5 56 54 56 54"
			}
	  },
		{
			id: 93,
			radiologistInCharge: "Jean Michel",
			creationDate: "2015-02-10T23:30:00+0100",
			nbDicoms: 73,
			stateReport: "Interprété",
			reportPath: reportBasePath + "CR_Carcinome_93.pdf",
			acts: ['Bassin 3 incidences'],
			hospital: {
				id: 28,
				name: "Centre Hospitalier de Papeete",
				address: "Centre Hospitalier de Papeete - Rue principale 98713 Papeete",
				phoneNumber: "+33 5 56 54 56 54"
			}
		}]
	},
	{
		id: 74,
		lastName: "Chirac",
		firstName: "Jacques",
		gender: "M",
		dateOfBirth: "1955-06-01T00:00:00+0200",
		examsList: [{
			id: 26,
			radiologistInCharge: "France Garat",
			creationDate: "2015-01-30T23:30:00+0100",
			nbDicoms: 170,
			stateReport: "Interprété",
			reportPath: reportBasePath + "CR_Poumon_26.pdf",
			acts: ['Thorax'],
			hospital: {
				id: 1,
				name: "Centre Hospitalier de Niort",
				address: "Centre Hospitalier de Niort - Rue principale 98713 Niort",
				phoneNumber: "+33 5 56 54 56 54"
			}
		},
		{
			id: 89,
			radiologistInCharge: "Jean Michel",
			creationDate: "2015-02-10T23:30:00+0100",
			nbDicoms: 83,
			stateReport: "Interprété",
			reportPath: reportBasePath + "CR_Prostate_89.pdf",
			acts: ['Abdomen sans préparation'],
			hospital: {
				id: 1,
				name: "Centre Hospitalier de Niort",
				address: "Centre Hospitalier de Niort - Rue principale 98713 Papeete",
				phoneNumber: "+33 5 56 54 56 54"
			}
	  }]
	},
	{
		id: 5,
		lastName: "Tapis",
		firstName: "Bernard",
		gender: "M",
		dateOfBirth: "1988-06-01T00:00:00+0200",
		examsList: [{
			id: 33,
			radiologistInCharge: "Michel Marchant",
			creationDate: "2014-11-30T23:30:00+0100",
			nbDicoms: 220,
			stateReport: "Interprété",
			reportPath: reportBasePath + "CR_Bronches_33.pdf",
			acts: ['Cuisse', 'Avant-Bras'],
			hospital: {
				id: 13,
				name: "Centre Hospitalier de Bordeaux",
				address: "Centre Hospitalier de Bordeaux - Rue principale 33000 Bordeaux",
				phoneNumber: "+33 5 56 54 56 54"
			}
	  }]
	}]
};

server.listen(3000);