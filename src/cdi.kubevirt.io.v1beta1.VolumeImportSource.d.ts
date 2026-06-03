/** Generated from Remote JSON Schema for cdi.kubevirt.io.v1beta1.VolumeImportSource */

/**
 * VolumeImportSource works as a specification to populate PersistentVolumeClaims with data
 * imported from an HTTP/S3/Registry/Blank/ImageIO/VDDK source
 */
export interface CdiKubevirtIoV1Beta1VolumeImportSource {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * VolumeImportSourceSpec defines the Spec field for VolumeImportSource
   */
  spec: {
    /**
     * Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import.
     */
    checkpoints?: {
      /**
       * Current is the identifier of the snapshot created for this checkpoint.
       */
      current: string;
      /**
       * Previous is the identifier of the snapshot from the previous checkpoint.
       */
      previous: string;
      [k: string]: unknown;
    }[];
    /**
     * ContentType represents the type of the imported data (Kubevirt or archive)
     */
    contentType?: string;
    /**
     * FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint.
     */
    finalCheckpoint?: boolean;
    /**
     * Preallocation controls whether storage for the target PVC should be allocated in advance.
     */
    preallocation?: boolean;
    /**
     * Source is the src of the data to be imported in the target PVC
     */
    source?: {
      /**
       * DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC
       */
      blank?: {
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source
       */
      gcs?: {
        /**
         * SecretRef provides the secret reference needed to access the GCS source
         */
        secretRef?: string;
        /**
         * URL is the url of the GCS source
         */
        url: string;
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs
       */
      http?: {
        /**
         * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
         */
        certConfigMap?: string;
        /**
         * Checksum is the expected checksum of the file. Format: "algorithm:hash", e.g., "sha256:1234abcd..." or "md5:5678efgh..."
         * Supported algorithms: md5, sha1, sha256, sha512
         * If specified, the importer will verify the downloaded content matches this checksum
         */
        checksum?: string;
        /**
         * ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests
         */
        extraHeaders?: string[];
        /**
         * SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information
         */
        secretExtraHeaders?: string[];
        /**
         * SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded
         */
        secretRef?: string;
        /**
         * URL is the URL of the http(s) endpoint
         */
        url: string;
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
       */
      imageio?: {
        /**
         * CertConfigMap provides a reference to the CA cert
         */
        certConfigMap?: string;
        /**
         * DiskID provides id of a disk to be imported
         */
        diskId: string;
        /**
         * InsecureSkipVerify is a flag to skip certificate verification
         */
        insecureSkipVerify?: boolean;
        /**
         * SecretRef provides the secret reference needed to access the ovirt-engine
         */
        secretRef?: string;
        /**
         * URL is the URL of the ovirt-engine
         */
        url: string;
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
       */
      registry?: {
        /**
         * CertConfigMap provides a reference to the Registry certs
         */
        certConfigMap?: string;
        /**
         * ImageStream is the name of image stream for import
         */
        imageStream?: string;
        /**
         * Platform describes the minimum runtime requirements of the image
         */
        platform?: {
          /**
           * Architecture specifies the image target CPU architecture
           */
          architecture?: string;
          [k: string]: unknown;
        };
        /**
         * PullMethod can be either "pod" (default import), or "node" (node docker cache based import)
         */
        pullMethod?: string;
        /**
         * SecretRef provides the secret reference needed to access the Registry source
         */
        secretRef?: string;
        /**
         * URL is the url of the registry source (starting with the scheme: docker, oci-archive)
         */
        url?: string;
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source
       */
      s3?: {
        /**
         * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
         */
        certConfigMap?: string;
        /**
         * SecretRef provides the secret reference needed to access the S3 source
         */
        secretRef?: string;
        /**
         * URL is the url of the S3 source
         */
        url: string;
        [k: string]: unknown;
      };
      /**
       * DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source
       */
      vddk?: {
        /**
         * BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi
         */
        backingFile?: string;
        /**
         * ExtraArgs is a reference to a ConfigMap containing extra arguments to pass directly to the VDDK library
         */
        extraArgs?: string;
        /**
         * InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map
         */
        initImageURL?: string;
        /**
         * SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host
         */
        secretRef?: string;
        /**
         * Thumbprint is the certificate thumbprint of the vCenter or ESXi host
         */
        thumbprint?: string;
        /**
         * URL is the URL of the vCenter or ESXi host with the VM to migrate
         */
        url?: string;
        /**
         * UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi
         */
        uuid?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * TargetClaim the name of the specific claim to be populated with a multistage import.
     */
    targetClaim?: string;
    [k: string]: unknown;
  };
  /**
   * VolumeImportSourceStatus provides the most recently observed status of the VolumeImportSource
   */
  status?: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
