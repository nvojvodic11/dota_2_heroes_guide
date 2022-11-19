import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GuidesService{
    private readonly ADD_NEW_GUIDE_URL = `${environment.apiUrl}/addhero`;
    private readonly GET_GUIDE_URL = `${environment.apiUrl}/get-hero/{id}`
    private readonly UPDATE_GUIDE_URL = `${environment.apiUrl}/edithero/{id}`;

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder
    ){}

    /**
     * Add new guide to database
     * @param guide - new guide object
     * @returns 
     */

    addNewGuide(guide: any){
        return this.http.post(this.ADD_NEW_GUIDE_URL, guide)
    }

    /**
     * Get selected guide data
     * @param id
     * @returns 
     */
    getGuide(id: string): Observable<any>{
        const url = this.GET_GUIDE_URL.replace('{id}', id);
        return this.http.get<any>(url);
    }

    /**
     * Update guide
     * @param guide
     * @returns 
     */

    updateGuide(guide: any){
        const url = this.UPDATE_GUIDE_URL.replace('{id}', guide.id.toString());
        return this.http.post(url, guide)
    }

    /**
     * Create new form group for adding new guide
     * @returns empty form group
     */
    createNewGuideForm(): FormGroup<any>{
        return this.formBuilder.group({
            id: [''],
            heroName: ['', Validators.required],
            heroRole: ['', Validators.required],
            heroPosition: ['', Validators.required],
            heroImage: [null]
        }) as FormGroup<any>;
    }
}
