import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { SelectData } from "src/app/shared-components/utils/interfaces/select-data.interface";
import { environment } from "src/environments/environment";
import { GuideForm } from "../interfaces/guide-form.interface";
import { Guide } from "../interfaces/guide.interface";

@Injectable({
    providedIn: 'root'
})
export class GuidesService{
    private readonly ADD_NEW_GUIDE_URL = `${environment.apiUrl}/addguide`;
    private readonly GET_GUIDE_URL = `${environment.apiUrl}/get-guide/{id}`
    private readonly UPDATE_GUIDE_URL = `${environment.apiUrl}/editguide/{id}`;
    private readonly DELETE_GUID_URL = `${environment.apiUrl}/delete-guide/{id}`;

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder
    ){}

    /**
     * Add new guide to database
     * @param guide - new guide object
     * @returns 
     */

    addNewGuide(guide: Guide){
        return this.http.post(this.ADD_NEW_GUIDE_URL, guide)
    }

    /**
     * Get selected guide data
     * @param id
     * @returns 
     */
    getGuide(id: string): Observable<Guide>{
        const url = this.GET_GUIDE_URL.replace('{id}', id);
        return this.http.get<Guide>(url);
    }

    /**
     * Update guide
     * @param guide
     * @returns 
     */

    updateGuide(guide: Guide){
        const url = this.UPDATE_GUIDE_URL.replace('{id}', guide.id.toString());
        return this.http.put(url, guide)
    }

    /**
     * Create new form group for adding new guide
     * @returns empty form group
     */
    createNewGuideForm(): FormGroup<GuideForm>{
        return this.formBuilder.group({
            id: [''],
            heroName: ['', Validators.required],
            heroRole: ['', Validators.required],
            heroPosition: ['', Validators.required],
            heroImage: [null],
            counterHeroes: [''],
            counterItems: [''],
            fullBuild: [''],
            goodWith: [''],
        }) as FormGroup<GuideForm>;
    }

    /**
     * Delete selected guide
     * @param guideId
     * @returns 
     */
    deleteGuide(guideId: string): Observable<any>{
        const url = this.DELETE_GUID_URL.replace('{id}', guideId.toString());
        return this.http.delete<any>(url);
    }

    /**
     * Create data for select drop down
     * @param array array with original data
     * @param textFile filed form array of object to be used to get data from to dispaly text
     * @param valueField filed form array of object to be used to get data from to set value
     * @returns 
     */
    createSelectData(array: Array<object>, textFile: string, valueField: string): SelectData[]{
        return array.map(item => {
            return {
                text: item[textFile],
                value: item[valueField]
            }
        });
    }
}
