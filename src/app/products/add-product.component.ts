import { HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatCalendar } from "@angular/material/datepicker";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { Category } from "app/app.models";
import { AppService } from "app/app.service";
import { ProductoService } from "app/_services/productos.service";
import { UploadFileService } from "app/_services/upload-file.service";
import { Moment } from "moment";
import { Observable } from "rxjs";
import Swal from 'sweetalert2';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '02/10/1991', weight: 1111, symbol: 'Reabierto'},
  {position: 2, name: '02/10/1991', weight: 2222, symbol: 'Abierto'},
  {position: 3, name: '02/10/1991', weight: 3333, symbol: 'Abierto'},
  {position: 4, name: '02/10/1991', weight: 4444, symbol: 'Abierto'},
  {position: 5, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 6, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 7, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 8, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 9, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 10, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 11, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 12, name: '02/10/1991', weight: 25555, symbol: 'Abierto'},
  {position: 13, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 14, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 15, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 16, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 17, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 18, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 19, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
  {position: 20, name: '02/10/1991', weight: 5555, symbol: 'Abierto'},
];

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
  })
export class AddProductComponent implements OnInit {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  @ViewChild('calendar') calendar: MatCalendar<Moment>;
 selectedDate: Moment;
  

    public form: FormGroup;
  public colors = ["#5C6BC0", "#66BB6A", "#EF5350", "#BA68C8", "#FF4081", "#9575CD", "#90CAF9", "#B2DFDB", "#DCE775", "#FFD740", "#00E676", "#FBC02D", "#FF7043", "#F5F5F5", "#696969"];
  public sizes = ["Categoria 1", "Categoria 2", "Categoria 3"];
  public selectedColors: string;
  public categories: Category[];
  private sub: any;
  public id: any;
  file: any;
  files: any;
  categoriasLista: any;
  nuevaCatego = 0;
  step = 0;
  bandera = 0;
  cateTot = 'Categoria Seleccionada: ';
  bufferValue = 75;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
  currentFile: File;
  data: any;
  urlImagenes = [];
  datos: any;
  idCategoria: any;
  public unlock = false;
  ultimoId='';
  nombreCat= '';
  constructor(
    public appService: AppService, 
    public productoService: ProductoService, 
    public uploadService: UploadFileService, 
    public formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.newSteps.push({ title: null, value: null });

  }


  isLinear = false;
  formGroup: FormGroup;
  formStepper: FormArray;
  @ViewChild('stepper') stepper;
  stepOptions = [
    { label: 'Buy Groceries', value: '1' },
    { label: 'Cook Dinner', value: '2' },
    { label: 'Go To Sleep', value: '3' },
    { label: 'Go To Work', value: '4' },
    { label: 'Wake Up', value: '5' }
  ]
  newSteps = [];

  isSet = (value) => {
    return value !== undefined && value !== null;
  }

  addItem() {
    this.newSteps.push({ title: null, value: null });
    this.stepper.selectedIndex = this.newSteps.length - 1;
  }
  changeStep(event, index) {
    let x = this.stepper.selectedIndex

    let cate = this.categoriasLista[event.source.defaultTabIndex];

    for (let i = 0; i < this.categoriasLista.length; i++) {
      console.log(this.categoriasLista[i]);
      if (this.categoriasLista[i].nivelcategoria == event.value) {
        this.cateTot = this.cateTot + ' ' + '>' + ' ' + this.categoriasLista[i].descCategoria;
        this.newSteps[index].title = this.categoriasLista[i].descCategoria;
        this.newSteps[index].value = this.categoriasLista[i].nivelcategoria
        this.getCategorias(this.categoriasLista[i].nivelcategoria)
        this.newSteps.push({ title: null, value: null });
        this.newSteps[index + 1].title = "selecciona sub Categoria";
        this.newSteps[index + 1].value = this.categoriasLista[i].nivelcategoria;
        this.stepper.selectedIndex = (x + 1);
      }
    }
    //  
    // console.log(event.value, index, this.stepperIndex)
  }

  public onStepChange(event: any): void {
    if (event.selectedIndex != 0) {
      console.log(this.newSteps[event.selectedIndex].value);
      let x = this.newSteps[event.selectedIndex].value
      this.getCategorias(x)
    }
    else {
      this.cateTot = 'Categoria Seleccionada: ';
      this.newSteps = [];
      this.newSteps.push({ title: "Selecciona una Categoria!!", value: 0 });
      this.iniciaStepepr();
      this.getCategorias(0);
      this.bandera = 0;
    }
  }

  iniciaStepepr() {
    this.newSteps[0].title = "Selecciona una Categoria!!";
    this.newSteps[0].value = 0;
  }


  stepSeleccionado(event, index) {
    console.log(event.value + "este selecciono en el estepper")
  }


  onRemoveAll() {
    this.newSteps = [];
  }

  removeStep(i) {
    this.newSteps.splice(i, 1);
  }


  ngOnInit(): void {
    this.getCategorias(this.nuevaCatego)
    this.iniciaStepepr();

    this.data = {
      name: '',
      oldPrice: 0,
      newPrice: 0,
      discount: 0,
      description: '',
      availibilityCount: 0,
      color: [],
      size: [],
      weight: 0,
      categoryId: 0
    }
    this.form = this.formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'images': null,
      "oldPrice": null,
      "newPrice": [null, Validators.required],
      "discount": null,
      //"discount": [null, Validators.compose([Validators.minLength(0), Validators.maxLength(100)])],
      "description": null,
      "availibilityCount": null,
      "color": null,
      "size": null,
      "weight": null,
      "categoryId": [null, Validators.required]
    });
    this.getCategories();
    this.sub = this.activatedRoute.params.subscribe(params => {
      /**   if (params['id']) {
          this.id = params['id'];
          this.getProductById();
        }
        */
    });
  }

  public getCategorias(idPadre) {
    this.ultimoId = idPadre ;
    this.productoService.consultarCategoriasHija(idPadre).subscribe(data => {
      this.categoriasLista = data.lista;

      if (data.mensaje == "ULTIMO" && this.bandera === 0) {
        this.step++;
        this.bandera = 1;
        this.idCategoria = this.ultimoId;
      }
      //this.categories.shift();
    });
  }

  public getCategories() {
    this.appService.getCategories().subscribe(data => {
      this.categories = data;
      this.categories.shift();
    });
  }
  /**
    public getProductById() {
      this.appService.getProductById(this.id).subscribe((data: any) => {
        this.form.patchValue(data);
        this.selectedColors = data.color;
        const images: any[] = [];
        data.images.forEach(item => {
          let image = {
            link: item.medium,
            preview: item.medium
          }
          images.push(image);
        })
        this.form.controls.images.setValue(images);
      });
    }
   */

  public onSubmit() {
    
    this.form.patchValue({
      'categoryId': this.ultimoId});

    this.datos = this.form.value;
    this.datos.images = null;
    this.datos.images = this.urlImagenes;
    // console.log(datos);
    //comenzamos a subir los archivos recorriendo el objeto files que es donde se encuentran guardadas las imagenes del control
    //coimenzamos a subir el registro de los datos del productos
    


    this.productoService.registraProducto(this.datos).subscribe(
      data => {
        Swal.close();
        this.urlImagenes = null;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se Agrego el producto Con Exito',
          showConfirmButton: false,
          timer: 3000
        })
        if (this.form.valid) {
          this.form.reset();
        }
        this.router.navigate(['/admin/products/add-product']);
      },
      err => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error Al Registrar El Producto!!',
          text: 'Favor de contactar a sistemas!',
          //footer: '<a href>Favor de contactar a sistemas!</a>',
          showConfirmButton: false,
          timer: 3000
        })
      }
    );
  }


  public upLoad() {
    for (let i = 0; i < this.file.length; i++) {
      if (!Array.isArray(this.file[i].file)) {
        this.files = [this.file[i].file];
        this.subeArchivo(i)
      } else {
        this.files = [this.file[i].file];

      }
    }
    this.unlock = true;
  }

  public subeArchivo(index) {
    this.currentFile = this.files[0];
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          this.bufferValue = Math.round(100 * event.loaded / event.total) + 15;
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.urlImagenes.push(this.message);
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Error al subir el archivo!';
        this.currentFile = undefined;
      });

    this.files = undefined;
  }

  public onColorSelectionChange(event: any) {
    if (event.value) {
      this.selectedColors = event.value.join();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
      this.step++;
  }

  prevStep() {
    this.step--;
  }

}