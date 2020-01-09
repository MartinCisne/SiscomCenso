import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable()
export class EndpointService {


    //prueba desarrollo
    public url:String = 'http://localhost:51053'
    //public url:String = 'http://api-siscom.sosapac.gob.mx'
    //public url :String ='http://api-siscom-agua.gfdsystems.com.mx'; //SANDBOX DESARROLLO**************************
    //public url: String ='https://siscomaguadesarrollo.azurewebsites.net';
    //public url : String='https://siscomapi.azurewebsites.net';
    public sosapacActive : boolean = true; 

    //public url:String = 'http://localhost:51053'
    //public url :String ='http://api-siscom.cuautlancingo.gob.mx' 
    //public url :String ='http://api-siscom-ayuntamiento.gfdsystems.com.mx' //SANDBOX DESARROLLO**************************
    //public url: String='https://siscomayuntamientodesarrollo.azurewebsites.net';
    //public url : String='https://ayuntamiento.azurewebsites.net';
    //public sosapacActive: boolean = false;

    public login_post:string=this.url+'/api/Auth/login';
    public createUser:string=this.url+'/api/Auth';
    public createUserNew:string=this.url+'/api/UserRolesManager/AddUsers';

    //CONSULTA PADRÓN
    public padronEndPoint: string = this.url + '/api/DynamicSearches/Padron';

    //FOLIOS
    public folioEndPoint: string = this.url + '/api/Folio';

    //BRACHOFFICE
    public branchOfficeEndPoint: string = this.url + '/api/BranchOffice';

    //BREANCHARTICLE
    public breanchArticleEndPoint: string = this.url + '/api/BreachArticle/';
    //public breanchArticleSearchEndPoint: string = this.url + '/api/BreachArticle/Search/';

    public getAllModels:string = this.url+'/api/Breach/getCarModels'
    public getModelsCar:string = this.url+'/api/Breach/getCar/'

    //WARRANTY
    public warrantyEndPoint: string = this.url + '/api/Warranty/';
    public warrantyPutEndPoint: string = this.url + '/api/BreachWarranty';

    //CLIENTS
    public getOneClient:string = this.url + '/api/Clients/';
    public updateClient: string = this.url + '/api/Agreement/';

    //CollectionSummary
    public postCollectionSumary:string = this.url + '/api/CollectionSummary/TotalCollection/';
    public postCollectionSumarySucursal:string = this.url + '/api/CollectionSummary/IncomeReport/';

    //REPORT HISTORIC AND MONTH
    public reportMonthEndPoint: string = this.url + '/api/Reports/ExerciseMonth/';
    public reportHistoricEndPoint: string = this.url + '/api/Reports/Historic/';

    //TAXUSER
    public taxUserEndPoint: string = this.url + '/api/TaxUsers';

    //TAXADDRESSES
    public taxAddressesEndPoint: string = this.url + '/api/TaxAddress';

    //BRANDMODELS
    public brandModelsEndPoint: string = this.url + '/api/BrandModels';

    //POSTALMX
    public postalMxEndPoint: string = this.url + '/api/PostalMxes';
    public postalMxEnbPointId: string = this.url + '/api/PostalMxes';

    //BREACHES
    public breachesEndPoint: string = this.url + '/api/Breach';

    //BREACHlIST
    public breacListEndPoint: string = this.url + '/api/BreachList';

    //BREACHARTICLE
    public breachArticleEndPoint: string = this.url + '/api/BreachArticle';

    //ASSIGNMENTTICKETS
    public assignmentTicketEndPint: string = this.url + '/api/AssignmentTickets';

    //TRANSITPOLICE
    public transitPoliceEndPoint: string = this.url + '/api/TransitPolice/';

    //USER ROLES MANAGER
    public userRolesManagerEndPoint: string = this.url + '/api/UserRolesManager/ChangePassword';
    public userRolesEndPoint: string = this.url + '/api/UserRolesManager/Users';
    public userTerminalEndPoint: string = this.url + '/api/TerminalUser/'

    //FACTOR
    public factorEndPoint: string = this.url + '/api/ValueParameters?value=FACTOR'
    public factorUMA: string = this.url +'/api/ValueParameters?value=FACTOR'
    public AIMFactorEndPoint: string = this.url + '/api/ValueParameters?value=AIM'
    public imageLogo:string = this.url+'/api/ValueParameters?value=IMAGEN'

    //PRODUCT AGREEMENT
    public productAgreementEndPoint: string = this.url + '/api/Products/Agreement/';

    //ORDERSALES
    public orderSalesEndPoint: string = this.url + '/api/OrderSales';
    public orderSaleRFC: string = this.url + '/api/OrderSales/RFC/'

    // public searchOrderSalesByName: string = this.url + '/api/OrderSales/Name/';
    // public searchOrderSalesByRFC: string = this.url + '/api/OrderSales/RFC/';

    //GET ORDER SALES
    public productsEndPoint: string = this.url + '/api/Reports/GetOrderSaleByFolio/';

    //GET ORDER SALES BY ID
    public orderSalesByIdEndPoint: string = this.url + '/api/OrderSales/GetOrderSaleById?=';

    //EARNINGS
    public getEarnings:string=this.url+"/api/CollectionSummary/IncomeReport/"

    //DIVISION
    public divisionEndPoint:string = this.url + '/api/Division';

    //ROLNAME
    public rolName:string = this.url+'/api/Division/roles'
    //GET DEBT
    public getCountDebt:string=this.url+'/api/Agreements/GetSummary/';

    //GET POLYGON
    public getPolygon:string=this.url+'/api/Agreements/getPolygon/';

    //GET ROUTES LIST
    public getRoutesList:string=this.url+'/api/Agreements/getRoutesList'
    //REPORTS
    public postReportIncomeFromBox:string=this.url+"/api/Reports/IncomeFromBox/"
    public incomeGroupedReportEndPoint: string = this.url + '/api/Reports/IncomeGrouped';   
    public padronWaterEndPoint: string = this.url + '/api/Reports/PadronWater';
    public IncomeByConceptEndPoint: string = this.url + '/api/Reports/IncomeByConcept';    
    public historialReportEndPoint: string = this.url + '/api/Reports/Historial';   
    public incomeOfTreasuryReportEndPoint: string = this.url + '/api/Reports/IncomeOfTreasury'; 
    public reportDebtsEndPoint: string = this.url + '/api/Reports/DebtsWater'
    public reportDebtsCouncilEndPoint: string = this.url + '/api/Reports/DebtsCouncil'
    public reportIncomeNewAccountsEndPoint: string = this.url + '/api/Reports/IncomeNewAccounts/'
    public reportIncomeNewAccountsAyuntamiento: string = this.url + '/api/Reports/IncomeNewAccountsAyunt/'
    public reportOrders: string = this.url + '/api/Reports/Orders/';

    public addDebt: string = this.url + '/api/Agreements/addDebt/';
    public addDebtAyuntamiento: string = this.url + '/api/Agreements/addDebtAyuntamiento/';
    public addDebtAgua: string = this.url + '/api/Agreements/addDebtSosapac/';
    public addDiscountVulnerable: string = this.url + '/api/Agreements/discountVulnerable/';
    public ReverseVulnerable: string = this.url + '/api/Agreements/reverseVulnerable';
    public AgreementByAccount: string = this.url + '/api/Agreements/AgreementByAccount/';

    //PARTIAL_PAYMENTS
    public addPartialPayment: string = this.url + '/api/PartialPayment/createPartialPayment/';
    public billingPartialPayment: string = this.url + '/api/PartialPayment/billingPartialPayment/';
    public cancelPartialPayment: string = this.url + '/api/PartialPayment/cancelPartialPayment/';
    public findPartialPaymentAgreement: string = this.url +'/api/PartialPayment/FindPartialPaymentAgreement/' ;
    public findPartialPaymentFolio: string = this.url +'/api/PartialPayment/FindPartialPaymentFolio/' ;
    public findPartialPaymentAmount: string = this.url + '/api/PartialPayment/FindPartialPaymentAmount/';
    public findPartialPaymentConcepts: string = this.url + '/api/PartialPayment/FindPartialPaymentConcepts/';
    public findPartialPaymentReceipts: string = this.url + '/api/PartialPayment/FindPartialPaymentReceipts/';
    public findPartialPaymentToAgree: string = this.url + '/api/PartialPayment/FindPartialPaymentToAgree/';
    public FindPartialPaymentDebt: string = this.url + '/api/PartialPayment/FindPartialPaymentDebt/';

    //TRANSITO
    public orderSalesSearchEndPoint: string = this.url + '/api/OrderSales/FindAllOrdersByDateBreach/';
    public orderSalesSearchDetailsEndPoint: string = this.url + '/api/OrderSales/FindAllOrderTaxUser/';
    public searchOrderSalesTaxUSer: string = this.url + '/api/OrderSales/OrderTaxUser/';

    //REGIONS
    public getRegion:string=this.url+'/api/Regions';
    public postRegion:string=this.url+'/api/Regions';
    public getOneRegion:string=this.url+'/api/Regions/';
    public putRegion:string=this.url+'/api/Regions/';
    public deleteRegion:string=this.url+'/api/Regions/';

    //GETALLUSER
    public UserRolesManager:string=this.url+'/api/UserRolesManager/';

    //CLASIFICATIONS
    public getClasification:string=this.url+'/api/Clasifications';
    public postClasification:string=this.url+'/api/Clasifications';
    public getOneClasification:string=this.url+'/api/Clasifications/';
    public putClasification:string=this.url+'/api/Clasifications/';
    public deleteClasification:string=this.url+'/api/Clasifications/';

    //COUNTRIES
    public getCountries:string=this.url+'/api/Countries';
    public postCountries:string=this.url+'/api/Countries';
    public getOneCountries:string=this.url+'/api/Countries/';
    public putCountries:string=this.url+'/api/Countries/';
    public deleteCountries:string=this.url+'/api/Countries/';

    //DIAMETERS
    public getDiameter:string=this.url+'/api/Diameters';
    public postDiameter:string=this.url+'/api/Diameters';
    public getOneDiameter:string=this.url+'/api/Diameters/';
    public putDiameter:string=this.url+'/api/Diameters/';
    public deleteDiameter:string=this.url+'/api/Diameters/';

    //COUNTRIES states
    public getState:string=this.url+'/api/Countries/'+'1'+'/States';
    public postState:string=this.url+'/api/Countries/'+'1'+'/States';
    public getOneState:string=this.url+'/api/Countries/'+'1'+'/States/';
    public putState:string=this.url+'/api/Countries/'+'1'+'/States/';
    public deleteState:string=this.url+'/api/Countries/'+'1'+'/States/';

    //STATES
    public getStates:string=this.url+'/api/Countries/1/States';
    public postStates:string=this.url+'/api/Countries/1/States';
    public getOneStates:string=this.url+'/api/Countries/1/States/';
    public putStates:string=this.url+'/api/Countries/1/States/';
    public deleteStates:string=this.url+'/api/Countries/1/States/';

    //SUBURB
    public getSuburb:string=this.url+'/api/Towns/2/Suburbs';
    public getSuburbCuautlancingo:string=this.url+'/api/Towns/5/Suburbs';
    public getSpecificSuburb:string=this.url+'/api/Towns/';
    public getSuburbValue:string=this.url+'/api/Towns/';
    public postSuburb:string=this.url+'/api/Towns/1/Suburbs';
    public postSpecificSuburb:string=this.url+'/api/Towns/';
    public getOneSuburb:string=this.url+'/api/Towns/1/Suburbs/';
    public getOneSpecificSuburb:string=this.url+'/api/Towns/';
    public putSuburb:string=this.url+'/api/Towns/1/Suburbs/';
    public putSpecificSuburb:string=this.url+'/api/Towns/';
    public deleteSuburb:string=this.url+'/api/Towns/1/Suburbs/';
    public oneSuburbEndPoint:string=this.url+'/api/Towns/2/Suburbs/';

    //TOWNS
    public getTown:string=this.url+'/api/States/21/Towns';
    public getTownSpecific:string=this.url+'/api/States/';
    public getTownId:string=this.url+'/api/States/';
    public postTown:string=this.url+'/api/States/';
    public getOneTown:string=this.url+'/api/States/21/Towns/';
    public putTown:string=this.url+'/api/States/';
    public deleteTown:string=this.url+'/api/States/21/Towns/';
    public getTownEndPoint:string=this.url+'/api/States/';

    //TYPECOMERTIALBUSINESSES
    public getTypeCommertialBusiness:string=this.url+'/api/TypeCommertialBusinesses';
    public postTypeCommertialBusiness:string=this.url+'/api/TypeCommertialBusinesses';
    public getOneTypeCommertialBusiness:string=this.url+'/api/TypeCommertialBusinesses/';
    public putTypeCommertialBusiness:string=this.url+'/api/TypeCommertialBusinesses/';
    public deleteTypeCommertialBusiness:string=this.url+'/api/TypeCommertialBusinesses/';

    //TYPECONSUMES
    public getTypeConsumes:string=this.url+'/api/TypeConsumes';
    public postTypeConsumes:string=this.url+'/api/TypeConsumes';
    public getOneTypeConsumes:string=this.url+'/api/TypeConsumes/';
    public putTypeConsumes:string=this.url+'/api/TypeConsumes/';
    public deleteTypeConsumes:string=this.url+'/api/TypeConsumes/';

    //TYPEINTAKES
    public getTypeIntakes:string=this.url+'/api/TypeIntakes';
    public postTypeIntakes:string=this.url+'/api/TypeIntakes';
    public getOneTypeIntakes:string=this.url+'/api/TypeIntakes/';
    public putTypeIntakes:string=this.url+'/api/TypeIntakes/';
    public deleteTypeIntakes:string=this.url+'/api/TypeIntakes/';

    //TYPEPERIODS
    public getTypePeriods:string=this.url+'/api/TypePeriods';
    public postTypePeriods:string=this.url+'/api/TypePeriods';
    public getOneTypePeriods:string=this.url+'/api/TypePeriods/';
    public putTypePeriods:string=this.url+'/api/TypePeriods/';
    public deleteTypePeriods:string=this.url+'/api/TypePeriods/';

    //TYPEREGIMES
    public getTypeRegimes:string=this.url+'/api/TypeRegimes';
    public postTypeRegimes:string=this.url+'/api/TypeRegimes';
    public getOneTypeRegimes:string=this.url+'/api/TypeRegimes/';
    public putTypeRegimes:string=this.url+'/api/TypeRegimes/';
    public deleteTypeRegimes:string=this.url+'/api/TypeRegimes/';

    //TYPESERVICES
    public getTypeServices:string=this.url+'/api/TypeServices';
    public postTypeServices:string=this.url+'/api/TypeServices';
    public getOneTypeServices:string=this.url+'/api/TypeServices/';
    public putTypeServices:string=this.url+'/api/TypeServices/';
    public deleteTypeServices:string=this.url+'/api/TypeServices/';

    //TYPESTATESERVICES
    public getTypeStateServices:string=this.url+'/api/TypeStateServices';
    public postTypeStateServices:string=this.url+'/api/TypeStateServices';
    public getOneTypeStateServices:string=this.url+'/api/TypeStateServices/';
    public putTypeStateServices:string=this.url+'/api/TypeStateServices/';
    public delteTypeStateServices:string=this.url+'/api/TypeStateServices/';

    //TYPEUSES
    public getTypeUses:string=this.url+'/api/TypeUses';
    public postTypeUses:string=this.url+'/api/TypeUses';
    public getOneTypeUses:string=this.url+'/api/TypeUses/';
    public putTypeUses:string=this.url+'/api/TypeUses/';
    public deleteTypeUses:string=this.url+'/api/TypeUses/';

    //Values
    public getValues:string=this.url+'/api/Values';
    public postValues:string=this.url+'/api/Values';
    public getOneValues:string=this.url+'/api/Values/';
    public putValues:string=this.url+'/api/Values/';
    public deleteValues:string=this.url+'/api/Values/';

    //AGREEMENTS
    public epAgreement:string=this.url+'/api/Agreement/';
    public epAgreements:string=this.url+'/api/Agreements/';
    public adrAgreements:string=this.url+'/api/Agreements/';
    public getAgreement:string=this.url+'/api/Agreements';
    public postAgreement:string=this.url+'/api/Agreements';
    public getOneAgreement:string=this.url+'/api/Agreements/';
    public updateAgreement:string=this.url+'/api/AgreementDetails/';
    //public Agreement:string=this.url+'/api/AgreementDetails/';
    public deleteAgreement:string=this.url+'/api/Agreements/';
    public putAgreement:string = this.url + '/api/Agreements/';
    public getDataAgreement:string=this.url+'/api/Agreements/GetData';
    public getDerivatives:string=this.url+'/api/Agreements/GetDerivatives/'
    public getDerivativesDos:string=this.url+'/api/Agreements/GetDerivativesDos/'
    public getRulerCalculation:string=this.url+'/api/AgreementRulerCalculations/'
    public putRulerCalculation:string=this.url+'/api/AgreementRulerCalculations/'
    public activeRulerCalculationState:string=this.url+'/api/AgreementRulerCalculations/ActiveAgreementRulerCalculationState/'
    public unactiveRulerCalculationState:string=this.url+'/api/AgreementRulerCalculations/UnactiveAgreementRulerCalculationState/'
    public unactiveAllRulerCalculationState:string=this.url+'/api/AgreementRulerCalculations/UnactiveAllAgreementRulerCalculationState/'

    
    public sendEmail:string=this.url+'/api/Agreements/sendEmail/'
    public compareAccount:string=this.url+'/api/Agreements/comparateAccount/'
    

    //GET SPECIFIC INFO
    public getAgreementEspecific:string=this.url+'/api/Agreements/AgreementsBasic/';
    public getAgreementDerivative:string=this.url+'/api/Agreements/AgreementsDerivate/';

    public getAgreementName:string=this.url+'/api/Agreements/FindAgreementParam?Type=2&StringSearch=';
    public getAgreementAccount:string=this.url+'/api/Agreements/FindAgreementParam?Type=1&StringSearch=';
    public getAgreementRFC:string=this.url+'/api/Agreements/FindAgreementParam?Type=4&StringSearch=';
    public getAgreementAddress:string=this.url+'/api/Agreements/FindAgreementParam?Type=3&StringSearch='

    //SERVICES
    public getServices:string=this.url+'/api/Services';
    public postServices:string=this.url+'/api/Services';
    public getOneServices:string=this.url+'/api/Services/';
    public updateServices:string=this.url+'/api/Services/';
    public deleteServices:string=this.url+'/api/Services/';

    //CANCELATION
    public getAllCancelation:string = this.url+'/api/TransactionCancelationRequest'
    public getCancelation:string = this.url+'/api/TransactionCancelationRequest/'
    public putStatusCancelation : string= this.url+'/api/TransactionCancelationRequest/'

    //DISCOUNT
    public getDiscount:string=this.url+'/api/Discounts';
    public postDiscount:string=this.url+'/api/Discounts';
    public getOneDiscount:string=this.url+'/api/Discounts/';
    public updateDiscount:string=this.url+'/api/Discounts/';
    public deleteDiscount:string=this.url+'/api/Discounts/';

    public getDiscountAuth:string=this.url+'/api/DiscountAuthorizations/GetPendindDiscountAuthorizationList';

    public getListDiscount:string=this.url+'/api/DiscountAuthorizations/GetAllDiscountAuthorizationList';

    public getOrderSale : string = this.url+'/api/OrderSales/FindAllOrdersByDate/';

    public postDiscountAgreement : string=this.url+'/api/Agreements/AddDiscount';

    public addDiscount:string = this.url+'/api/Agreements/addDiscountDebt/'

    public getDiscountAgreement  : string=this.url+ '/api/Agreements/GetDiscounts/';
    public putDiscountAgreement : string=this.url+'/api/Agreements/PutDiscount/';

    public getFile :string = this.url+'/api/FileUpload/'

    public getFileDiscount :string = this.url+'/api/DiscountAuthorizations/DownloadFileAzure/'


    public putStatusDiscount : string= this.url+'/api/DiscountAuthorizations/'


    //CANCELATION ORDERS
    public cancelProducts : string= this.url+'/api/CancelProducts/date/';
    public putCancelation : string= this.url+'/api/CancelProducts/Cancels/'


    //DEBTS
    public getDebts : string=this.url+"/api/Debts/GetDebtByPeriod/";
    public getOnlyDebts : string=this.url+"/api/Debts/";

    //PAYMENT
    public getPyments : string=this.url+"/api/PaymentHistory/";


    //ANTICIPOS
    public getAnticipos : string=this.url+"/api/Prepaid/";


    //BRANCHOFFICE
    public getOficce : string=this.url+"/api/BranchOffice/";


    //NOTIFICACIONES
    public getNotitifications:string=this.url+"/api/Notifications/";

    //TYPECLASIFICATIONS
    public getClasfications:string=this.url+'/api/TypeClassifications';
    public postClasfications:string=this.url+'/api/TypeClassifications';
    public getOneClasfications:string=this.url+'/api/TypeClassifications/';
    public updateClasfications:string=this.url+'/api/TypeClassifications/';
    public deleteClasfications:string=this.url+'/api/TypeClassifications/';

    //PRODUC
    public epProducts : string=this.url+"/api/Products/";
    public epProductsDiv : string=this.url+"/api/Products/Division/";
    public epProductsTariff : string=this.url + "/api/Products/Tariff/";
    public epSaleOfProdcuts : string= this.url + "/api/SaleOfProdcuts";
    
    public getFather : string=this.url + "/api/Products/Child/";

    //CUT BOX
    public getCutBox:string=this.url+"/api/Transaction/BranchOffice/";

    //FILES
    public uploadFile:string=this.url+"/api/FileUpload/";

    //PAYMETHOD
    public payMethod:string=this.url+"/api/PayMethod";
    public payMethodOne:string=this.url+"/api/PayMethod/";
    public payMethodPut:string=this.url+"/api/PayMethod/";

    //PARAMETER
    public getParameters:string=this.url+"/api/ValueParameters/GetAllParameters"
    public getOneParameters:string=this.url+"/api/ValueParameters/GetParametersById/"
    public postParameters:string=this.url+"/api/ValueParameters";
    public putParameters:string=this.url+"/api/ValueParameters/";
    public getQueryParam:string=this.url+"/api/ValueParameters?=";


    //INPC
    public getInpc:string=this.url+"/api/INPC";
    public postInpc:string=this.url+"/api/INPC";
    public getOneInpc:string=this.url+"/api/INPC/"
    public putInpc:string=this.url+"/api/INPC/"

    constructor(
        protected localStorage: LocalStorage
    ) { 
       
    }

    
   
 }


